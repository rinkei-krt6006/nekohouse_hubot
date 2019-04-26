const request=require("request")
module.exports=robot => {
  //https://pbs.twimg.com/
  robot.hear(/\#めし|https\:\/\/pbs\.twimg\.com/i,msg => {
    //console.log(msg.message.text)
    if(msg.message.text.match(/\#めし/gi) && msg.message.text.match(/https\:\/\/pbs\.twimg\.com/gi)){
      robot.send({room: "#めしぃプロ"},
      `https://${process.env.SLACK_WORKSPACE_URL}/archives/${msg.message.rawMessage.channel}/p${msg.message.rawMessage.ts.toString().replace(/\./,"")}`
    )
    }
  })

  robot.hear(/.+/i,msg => {
    //"CHLD2ADPX" === testWorkSpace roomID
    //"CD04KEZ6V" === nekohouse times_rinkei
    if((msg.message.room==="CHLD2ADPX"||msg.message.room==="CD04KEZ6V")&&!msg.message.rawMessage.subtype) {
      let text=
        `${msg.message.rawMessage.user.name} ${msg.message.rawMessage.text} `+
        ` https://${process.env.SLACK_WORKSPACE_URL}/archives/`+
        `${msg.message.rawMessage.channel}/p`+
        `${msg.message.rawMessage.ts.toString().replace(/\./,"")} `
      request.get({
        url: `http://192.168.0.62:9002/?{%22channel%22:%22times_rinkei_human%22,%22text%22:%22${encodeURIComponent(text)}%22}`
      },(error,response,body) => {
        console.log(body)
      })
    }
  })
}