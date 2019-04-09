// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1561386771',
  channelSecret: 'a2c3ec044db24b0e29a0d14876d2eb10',
  channelAccessToken: 'tFSdm/rWYe2IQNhH6pj5RqygL5LxvMl+4Tybc55IY05ytCTStowvHoyyUrykTG+0ap3DiiPoQklAUlE8cpnCoUdhqMM0b4B53VRijDbzo7X1pG4GGaPLx+bbiP5xWc3DDG8gVjBKZMBwqkQZf/3KbwdB04t89/1O/w1cDnyilFU='
});

// // echo bot code
// bot.on('message', function (event) {
//   // message received from someone: event.message.text
//   // message sent to someone who send message to this bot: event.reply
//   event.reply(event.message.text).then(function (data) {
//     // successfully message replied
//   }).catch(function (error) {
//     // errors when it occurs failed sending messages
//   });
// });

// when someone send message to this bot, it will reply:
bot.on('message', function (event) {
  switch (event.message.type) {
    case 'text':
      switch (event.message.text) {
        // hello
        case '你好':
          event.reply('嗨嗨我是筠筠～筠筠的名字的讀音跟「雲雲」一樣，但是常常被唸成「君君」哈哈！\n\n'+
            '筠筠有好多好多想要跟你/妳分享的故事，你想要先了解哪一個部分的我呢？我可以告訴你/妳我的: \n\n'+
            '興趣、夢想\n'+'擅長的事物\n'+'喜歡的照片\n'+'喜歡的文字');
          break;
        // hello version 2
        case '你好！':
          event.reply('嗨嗨我是筠筠～筠筠的名字的讀音跟「雲雲」一樣，但是常常被唸成「君君」哈哈！\n\n'+
            '筠筠有好多好多想要跟你/妳分享的故事，你想要先了解哪一個部分的我呢？我可以告訴你/妳我的: \n\n'+
            '興趣、夢想\n'+'擅長的事物\n'+'喜歡的照片\n'+'喜歡的文字');
          break;
        // hello version 3
        case '你好～':
          event.reply('嗨嗨我是筠筠～筠筠的名字的讀音跟「雲雲」一樣，但是常常被唸成「君君」哈哈！\n\n'+
            '筠筠有好多好多想要跟你/妳分享的故事，你想要先了解哪一個部分的我呢？我可以告訴你/妳我的: \n\n'+
            '興趣、夢想\n'+'擅長的事物\n'+'喜歡的照片\n'+'喜歡的文字');
          break;
        // dream
        case '興趣、夢想':
          event.reply({
            type: 'template',
            altText: '筠筠的興趣和夢想',
            template: {
              type: 'confirm',
              text: '筠筠很喜歡唱歌，也很喜歡寫程式，最喜歡的是一邊唱歌一邊寫程式。\n\n'+
              '筠筠的夢想是用自己擁有的專業改變世界上的某一個角落。\n\n\n\n\n'+
              '偷偷告訴你～我還可以告訴你/妳我的：',
              actions: [{
                type: 'message',
                label: '擅長的事物',
                text: '擅長的事物'
              }, {
                type: 'message',
                label: '喜歡的照片',
                text: '喜歡的照片'
              }]
            }
          });
          break;
        // skills
        case '擅長的事物':
          event.reply('筠筠擅長的程式語言有Python, C++, R, 以及網頁程式設計，包含HTML/CSS和react.js框架'+
            '曾經當過港口排班資訊系統的PM，也曾經在創意App設計大賽中獲得冠軍，學期間也曾完成過資料庫、區塊鏈等課程的實作專案\n\n'+
            '筠筠認為自己最擅長的是資訊系統的開發和設計，最喜歡的部份是理解使用者需求並用資訊系統來解決潛在的問題。\n\n\n\n'+
            '其實，我還可以告訴你/妳我的：喜歡的照片、喜歡的文字喔～快問我快問我！');
          break;
        // text
        case '喜歡的文字':
          event.reply({
            type: 'template',
            altText: '筠筠喜歡的文字',
            template: {
              type: 'confirm',
              text: '筠筠講笑話時間：\n有一天皮卡丘跟傑尼龜借錢\n'+
              '皮卡丘：皮卡皮卡皮卡 (傑尼龜 借我錢\n'+'.\n'+'.\n'+'.\n'+
              '傑尼龜：不要'+'\n\n\n\n筠筠還想跟你分享：',
              actions: [{
                type: 'message',
                label: '喜歡的照片',
                text: '喜歡的照片'
              }, {
                type: 'message',
                label: '好可愛！',
                text: '好可愛！'
              }]
            }
          });
          break;
        // so cute
        case '好可愛！':
          event.reply({
            type: 'template',
            altText: '看更多貓貓',
            template: {
              type: 'confirm',
              text: '筠筠很喜歡貓貓，常常寫程式找不到bug就去找貓貓玩耍，然後再回來就會找到bug了!!!',
              actions: [{
                type: 'message',
                label: '我也是！',
                text: '我也是！'
              }, {
                type: 'message',
                label: '繼續聊天！',
                text: '繼續聊天！'
              }]
            }
          });
          break;
        // me too 
        case '我也是！':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://cdn2.ettoday.net/images/1762/d1762100.jpg',
            previewImageUrl: 'https://cdn2.ettoday.net/images/1762/d1762100.jpg'
          });
          break;
        // continue
        case '繼續聊天！':
          event.reply({
            type: 'template',
            altText: '繼續聊天',
            template: {
              type: 'confirm',
              text: '筠筠這學期在學校的專題研究主題是假新聞的辨識，會運用機器學習來完成一個辨識系統，希望可以抓出所有假新聞，讓大家不要再被騙！',
              actions: [{
                type: 'message',
                label: '是歐！',
                text: '是歐！'
              }, {
                type: 'message',
                label: '那就太好了！',
                text: '那就太好了！'
              }]
            }
          });
          break;
        // sounds great 
        case '那就太好了！':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://play.nownews.com/wp-content/uploads/2018/02/5a7d3bb2481981532ae188e8_201802091412.png',
            previewImageUrl: 'https://play.nownews.com/wp-content/uploads/2018/02/5a7d3bb2481981532ae188e8_201802091412.png'
          });
          break;
        // wow
        case '是歐！':
          event.reply({
            type: 'template',
            altText: '是歐',
            template: {
              type: 'confirm',
              text: '對呀！筠筠對新鮮的事物總是充滿了好奇心，你還可以問我：',
              actions: [{
                type: 'message',
                label: '中文系',
                text: '中文系'
              }, {
                type: 'message',
                label: 'Addon',
                text: 'Addon'
              }]
            }
          });
          break;
        // wow
        case 'Addon':
          event.reply({
            type: 'template',
            altText: 'Addon',
            template: {
              type: 'confirm',
              text: '這是一個利用手機App將設計思考中常用的便利貼數位化，解決了環保問題，更將智慧共享到世界上每一個角落的設計',
              actions: [{
                type: 'message',
                label: '哇嗚',
                text: '哇嗚'
              }, {
                type: 'message',
                label: '喔',
                text: '喔'
              }]
            }
          });
          break;
        // oh
        case '喔':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/25539163/android/sticker.png',
            previewImageUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/25539163/android/sticker.png'
          });
          break;
        // wow
        case '中文系':
          event.reply({
            type: 'template',
            altText: '中文系',
            template: {
              type: 'confirm',
              text: '筠筠一直都對中文有很大的興趣，所以中文才可以說的這～摸好！也因為對中文很感興趣，所以雙主修中文系歐！這也幫助我不斷的思考、勇敢的去嘗試新事物！',
              actions: [{
                type: 'message',
                label: '哇嗚',
                text: '哇嗚'
              }, {
                type: 'message',
                label: '醬啊',
                text: '醬啊'
              }]
            }
          });
          break;
        // wawoo
        case '哇嗚':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/11643749/android/sticker.png',
            previewImageUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/11643749/android/sticker.png'
          });
          break;
        // wawoo
        case '你好可愛':
          event.reply('謝謝！');
        break;
        // ok
        case '醬啊':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/20472944/android/sticker.png',
            previewImageUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/20472944/android/sticker.png'
          });
          break;
        // pictures
        case '喜歡的照片':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://blog.accupass.com/wp-content/uploads/2017/03/1_120122230539_1.jpg',
            previewImageUrl: 'https://blog.accupass.com/wp-content/uploads/2017/03/1_120122230539_1.jpg'
          });
          break;
        default:
          event.reply({
            type: 'template',
            altText: 'default text',
            template: {
              type: 'confirm',
              text: '對不起，筠筠聽不懂@_@\n\n你/妳或許可以點擊：',
              actions: [{
                type: 'message',
                label: '你好！',
                text: '你好！'
              }, {
                type: 'message',
                label: '繼續聊天！',
                text: '繼續聊天！'
              }]
            }
          });
          break;
      }
      break;
    case 'image':
    event.reply({
      type: 'template',
      altText: 'default text',
      template: {
        type: 'confirm',
        text: '哇～這是什麼～？',
        actions: [{
          type: 'message',
          label: '喜歡的照片',
          text: '喜歡的照片'
        }, {
          type: 'message',
          label: '你好可愛',
          text: '你好可愛'
        }]
      }
    });
    break;
      break;
    case 'sticker':
      event.reply({
        type: 'sticker',
        packageId: 1,
        stickerId: 1
      });
      break;
    default:
      event.reply('Unknow message: ' + JSON.stringify(event));
      break;
  }
});

// when this bot 'join' this bot, it will reply:
bot.on('join', function (event) {
  event.reply('大家好，我是筠筠！'+'\n'+'很高興認識大家~有任何想問的問題都可以問我歐！');
});

// when this bot 'leave' this bot, it will reply:
bot.on('leave', function (event) {
  event.reply('緣份讓我們能夠相遇，希望我們過去一起度過的時光都是美好的，\
  就讓最美的回憶停留在這一刻，我會一直在這裡等你，某一天你想起我的時候還是隨時可以繼續和我聊天喔！');
});

// when someone 'follow' this bot, it will reply:
bot.on('follow', function (event) {
  event.reply('你好！我是筠筠，很高興認識你！');
});

// when someone 'unfollow' this bot, it will reply:
bot.on('unfollow', function (event) {
  event.reply('緣份讓我們能夠相遇，希望我們過去一起度過的時光都是美好的，\
  就讓最美的回憶停留在這一刻，我會一直在這裡等你，某一天你想起我的時候還是隨時可以繼續和我聊天喔！');
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('ready');
});