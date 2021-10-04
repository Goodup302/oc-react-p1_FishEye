class FishEyeData {

    constructor(data) {
        this.data = data;
        console.log(data)
    }

    getAllTags() {
        let tags = [];
        this.data.media.forEach((media) => {
            let tag =  media.tags[0]
            if (!tags.includes(tag)) tags.push(tag)
        })
        return tags
    }

    getPhotographers($tag = null) {
        if ($tag) {
            let _photographers = []
            this.data.photographers.forEach(function (photographer) {
                if (photographer.tags.includes($tag)) _photographers.push(photographer)
            })
            return _photographers;
        } else {
            return this.data.photographers
        }
    }
    getPhotographer(photographeId) {
        const result = this.data.photographers.filter(photographer => photographer.id == photographeId)
        if (result) {
            return result[0]
        }
        return null
    }

    getMediaByPhotographer(photographeId) {
        return this.data.media.filter(media => media.photographerId == photographeId)
    }

    getPhotographerLike(photographeId) {
        const medias = this.getMediaByPhotographer(photographeId)

        let likes = 0
        medias.forEach((media) => {
            likes += media.likes
        })
        return likes
    }
}

export default FishEyeData;
