import { usePlayerStore } from "../store/playerStore";

export function SongTitleButton({song, children, className}) {
    const { setCurrentMusic, setIsPlaying, isPlaying, currentMusic} = usePlayerStore(state => state)

    const isPlayingSong = isPlaying && currentMusic.song.id === song.id

    const reproduceSong = () => {
        if (isPlayingSong) return

        fetch(`/api/get-music.json?id=${song.albumId}`)
            .then(res => res.json())
            .then(data => {
                const {songs, playlist} = data
    
                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[song.id - 1]})
            })
    }

    return (
        <button className={className} onDoubleClick={reproduceSong}>
            {children}
        </button>
    )
}