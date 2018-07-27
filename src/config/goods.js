export default class Good {
  constructor({
    bh,
    wz,
    zt,
    cs,
    tj,
    jg,
    mj,
    cx,
    xq,
    gly,
    glylx,
    fwxx,
    wzxx,
    img
  }) {
    this.bh = bh
    this.zt = zt
    this.wz = wz
    this.cs = cs
    this.tj = tj
    this.jg = jg
    this.mj = mj
    this.cx = cx
    this.xq = xq
    this.gly = gly
    this.glylx = glylx
    this.fwxx = fwxx
    this.wzxx = wzxx
    this.img = img
  }


  // getLyric() {
  //   if (this.lyric) {
  //     return Promise.resolve(this.lyric)
  //   }

  //   return new Promise((resolve, reject) => {
  //     getLyric(this.mid).then((res) => {
  //       if (res.retcode === ERR_OK) {
  //         this.lyric = Base64.decode(res.lyric)
  //         resolve(this.lyric)
  //       } else {
  //         reject('no lyric')
  //       }
  //     })
  //   })
  // }
}
