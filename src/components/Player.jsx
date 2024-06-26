import { useEffect, useRef, useState } from "react"
import { usePlayerStore } from "../store/playerStore"
import { Slider } from "../components/Slider"

export const Pause = ({ className }) => (
    <svg className={className} fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
    <svg className={className} fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const VolumeSilence = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
)

export const Volume = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
)

export const NextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-track-next"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /></svg>
)

export const PrevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-track-prev"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" /><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" /></svg>
)

export const PlayingIcon = ({ id }) => {
    const { isPlaying, currentMusic } = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic.playlist.id === id

    return (
        <>
            {
                isPlayingPlaylist
                    ? <h1>Ayuda</h1>
                    : <></>
            }
        </>
    )
}

const CurrentSong = ({ image, title, artists }) => {
    return (
        <div
            className={`
            flex items-center gap-3 relative
            overflow-hidden
        `}>
            <picture className="w-12 h-12 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                <img src={image} alt={title} />
            </picture>

            <div className="flex flex-col truncate">
                <h3 className="font-semibold text-base truncate">
                    {title}
                </h3>
                <span className="text-xs opacity-80">
                    {artists?.join(', ')}
                </span>
            </div>

        </div>
    )
}

const VolumeControl = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const previousVolumeRef = useRef(volume)

    const isVolumeSilenced = volume < 0.1

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current)
        } else {
            previousVolumeRef.current = volume
            setVolume(0)
        }
    }

    return (
        <div className="flex justify-center gap-x-2 text-white">
            <button className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolumen}>
                {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
            </button>

            <Slider
                defaultValue={[10]}
                max={100}
                min={0}
                value={[volume * 100]}
                className="w-[95px]"
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
            />
        </div>
    )
}

const SongControl = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime)
    }

    const formatTime = time => {
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const duration = audio?.current?.duration ?? 0

    return (
        <div className="flex gap-x-3 text-xs pt-2">
            <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

            <Slider
                value={[currentTime]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className="w-[475px]"
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    audio.current.currentTime = newCurrentTime
                }}
            />

            <span className="opacity-50 w-12">
                {duration ? formatTime(duration) : '0:00'}
            </span>
        </div>
    )
}

export function Player() {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic, volume } = usePlayerStore(state => state)
    const audioRef = useRef()

    useEffect(() => {
        isPlaying
            ? audioRef.current.play()
            : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume
    }, [volume])

    useEffect(() => {
        const { song, playlist, songs } = currentMusic
        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.volume = volume
            audioRef.current.play()
            console.log(song.id);
        }
    }, [currentMusic])

    const handleClick = () => {
        const {song} = currentMusic
        if (!song) return
        setIsPlaying(!isPlaying)
    }

    const nextSong = () => {
        const { song, playlist, songs } = currentMusic
        if (song) {
            let actualSong = song.id
            setIsPlaying(true)
            setCurrentMusic({ songs, playlist, song: songs[actualSong++] })
        }
        if (song && song.id > songs.length - 1) {
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
        }
    }

    const previousSong = () => {
        const { song, playlist, songs } = currentMusic
        if (song) {
            let previousSong = song.id - 2
            setIsPlaying(true)
            setCurrentMusic({ songs, playlist, song: songs[previousSong] })
        }

        if (song && song.id < 2){
            let previousSong = song.id - 1
            setIsPlaying(true)
            setCurrentMusic({ songs, playlist, song: songs[previousSong] })
        }
    }

    return (
        <section className="flex p-2 items-center justify-between text-white z-50">
            <div className="w-[270px] hidden md:block overflow-hidden">
                <CurrentSong {...currentMusic.song} />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex gap-2 items-center">
                    <button onClick={previousSong} className="rounded-full p-2 hover:bg-zinc-700 w-9 h-9 grid place-items-center">
                        <PrevIcon />
                    </button>

                    <button onClick={handleClick} className="rounded-full bg-white p-2">
                        {isPlaying ? <Pause className='text-black' /> : <Play className='text-black' />}
                    </button>

                    <button onClick={nextSong} className="rounded-full p-2 hover:bg-zinc-700 w-9 h-9 grid place-items-center">
                        <NextIcon />
                    </button>
                </div>
                <div>
                    <SongControl audio={audioRef} />
                </div>
            </div>


            <div className="w-[270px] px-4 flex justify-end overflow-hidden">
                <VolumeControl />
            </div>

            <audio ref={audioRef} onEnded={nextSong} />
        </section>
    )
}
