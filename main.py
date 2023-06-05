from dotenv import load_dotenv
import os
import base64
import requests
import json

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

def get_token():
    auth_string = f"{client_id}:{client_secret}"
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {"grant_type": "client_credentials"}
    result = requests.post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

def get_auth_header(token):
    return {"Authorization": "Bearer " + token}

def search_for_artist(token, artist_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"q={artist_name}&type=artist&limit=1"

    query_url = url + "?" + query
    result = requests.get(query_url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]
    if len(json_result) == 0:
        print("No exist")
        return None
    return json_result[0]

def get_song_info(token, song_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"q={song_name}&type=track&limit=1"

    query_url = url + "?" + query
    result = requests.get(query_url, headers=headers)
    json_result = json.loads(result.content)["tracks"]["items"]
    if len(json_result) == 0:
        print("No exist")
        return None
    return json_result[0]

def search_songs(token, song_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"q={song_name}&type=track&limit=10"

    query_url = url + "?" + query
    result = requests.get(query_url, headers=headers)
    json_result = json.loads(result.content)["tracks"]["items"]
    songs = []
    for item in json_result:
        song = {
            "name": item["name"],
            "artist": item["artists"][0]["name"],
            "preview": item["preview_url"],
            "image": item["album"]["images"][0]["url"],
        }
        songs.append(song)
    return songs

token = get_token()
print(token)

result_artist = search_for_artist(token, "KDA")
if result_artist:
    print(result_artist["name"])

result_song = get_song_info(token, "MORE")
if result_song:
    print(result_song["name"])
    print(result_song["artists"][0]["name"])
    print(result_song['preview_url'])
song_name = "Back in Black"
songs = search_songs(token, song_name)
for song in songs:
    print(song)
	
with open("songsearch.txt","w") as fichier:
    fichier.write(str(songs))