// write your CatList component here
import React from 'react'

class CatList extends React.Component {
    mapCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.mapCats}
            </div>
        )
    }
}

export default CatList;