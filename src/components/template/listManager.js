const CoursewareModel = {}

class ListItem {
  constructor({
    cover = '',
    id = ''
  } = {}) {
    this.cover = cover
    this.id = id
  }

  get data() {
    return {
      cover: 'http://' + this.cover,
      id: this.id + 123
    }
  }
}

class CoursewareListManager {
  constructor({
    teacherId = '',
    typeId = '',
  } = {}) {
    this.teacherId = teacherId
    this.typeId = typeId
  }

  async getOne() {
    const resp = await CoursewareModel.getOne({
      teacherId: this.teacherId
    })
    return resp.data.data.abcList.map.map(item => new ListItem({
      cover: item.dddCover,
      id: item.bbbbId
    }))
  }

  async getTwo() {
    const resp = await CoursewareModel.getTwo({
      typeId: this.typeId
    })
    return resp.data.list.map(item => new ListItem({
      cover: item.dddCover,
      id: item.bbbbId
    }).data)
  }

  async getThree() {
    const resp = await CoursewareModel.getThree({
      teacherId: this.teacherId,
      typeId: this.typeId
    })
    return resp.map(item => new ListItem({
      cover: item.dddCover,
      id: item.bbbbId
    }))
  }
}

export {
  CoursewareListManager
}
