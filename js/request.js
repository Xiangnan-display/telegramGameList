var userId; //用户Id
var challengeCount; //挑战次数
var groupStatus; //状态 0已退群 1已进群 2未进群
var integral; //积分
var inviteLink; //邀请链接

var telagramAuth = async function(){
            //    const userInfo = getUserInfo()
            const initDataUnsafe = Telegram.WebApp.initData;
    // let dataString = "query_id=AAGrXlsnAwAAAKteWyfbD9pt&user=%7B%22id%22%3A7102750379%2C%22first_name%22%3A%22XiangNan%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1717532815&hash=d6704bdd8e9fb296e9b15870da53845aad8cfc1173613749a545d3acf256e58d"
   await axios.post(`http://192.168.1.206:10001/web-hook/telagram/auth/login`, initDataUnsafe, {
                // headers: { 'token': axiosParam.token },
                withCredentials: false,
            })
                .then(res => {
                    console.log('登录鉴权', res);
                    localStorage.setItem("token", res.data.data.token)
                    localStorage.setItem("userId", res.data.data.id)
                    return res
               
                })
                .catch(error => {
                    console.error('登录鉴权:', error);

                });
}

var getTelagramUser =async function(){
    let userId = localStorage.getItem("userId")
    let token = localStorage.getItem("token")
    await axios.get(`http://192.168.1.206:10001/web-hook/telagram/user/info/${userId}`, {
        headers: { 'token': token },
        withCredentials: false
    })
        .then(res => {
            console.log('用户信息', res);
                    let data = res.data.data
      
                    document.getElementById('inviteLink').innerText =  data.inviteLink
                    document.getElementById('copybox').value = data.inviteLink
                    document.getElementById('myenergynum').innerText = data.integral
                    document.getElementById('invitePeoples').innerText = data.invitePeoples
                    document.getElementById('challengeCount').innerText = data.challengeCount
                    if (data.groupStatus != 1 ) {
                        showrule()
                    }else{
                        hiderule()
                    }
        })
        .catch(error => {
            //alert(error)
        })
}

var consumeC = function(){
    let userId = localStorage.getItem("userId")
    let token = localStorage.getItem("token")
    axios.get('http://herometa.io/web-hook/consume/challenge?userId=' + userId, {
        headers: { 'token': token },
        withCredentials: false
    })
        .then(res => {
            //alert(0)
        })
        .catch(error => {
            //alert(error)
        })
}