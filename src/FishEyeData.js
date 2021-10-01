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

    getPhotographers() {
        return this.data.photographers
    }
}

export default FishEyeData;
