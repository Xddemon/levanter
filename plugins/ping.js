const { bot } = require('../lib/')

bot(
  {
    pattern: 'babu ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```ＳＯＵＶＩＫ－ＸＤ!```')
    const end = new Date().getTime()
    return await message.send('*DAIRY MILK!*\n ```' + (end - start) + '``` *ms*')
  }
)
