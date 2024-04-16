import { Link } from 'react-router-dom'
import { AlbumsAndArtists } from '../../types/types'
import classes from './artsts.module.css'

type Props = {
    artistsDb: AlbumsAndArtists[]
}

export const Artists = ({ artistsDb }: Props) => {
    return (
        <>
            <h1>Browse the artists</h1>
            {artistsDb.map((artist) => {
                return (
                    <Link key={artist.id} to={artist.name}>
                        <div className={classes.coverImageDiv} >
                            <div className={classes.imgContainer}>
                                <img className={classes.coverImageProps} src={`../../../src/assets/imgs/covers/${artist.cover}.jpg`} alt="" />
                                <p>{artist.name}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}
