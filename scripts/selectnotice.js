module.exports = robot => {
  robot.hear(/\#めし/i,msg =>{
    robot.send({room:"#めしぃプロ"},
    `https://${process.env.SLACK_WORKSPACE_URL}/archives/${msg.message.rawMessage.channel}/p${msg.message.rawMessage.ts.toString().replace(/\./,"")}`
    )
  })

  robot.hear(/.+/i,msg =>{
    //"CHLD2ADPX" === testWorkSpace roomID
    //"CD04KEZ6V" === nekohouse times_rinkei
    if(msg.message.room === "CHLD2ADPX" && msg.message.room === "CD04KEZ6V" && !msg.message.rawMessage.subtype){
      robot.send({room:"#times_rinkei_human"},
      `https://${process.env.SLACK_WORKSPACE_URL}/archives/${msg.message.rawMessage.channel}/p${msg.message.rawMessage.ts.toString().replace(/\./,"")}`
      )
    }
  })
}