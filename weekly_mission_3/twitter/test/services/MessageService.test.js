const MessageService = require('./../../app/services/MessageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "aljes", "bacarre")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("aljes")
    expect(message.receptor).toBe("bacarre")
  })

})