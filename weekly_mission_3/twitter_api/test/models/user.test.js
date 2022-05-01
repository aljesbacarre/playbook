const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

  test('1) Create empty object', () => {
    const user = new User()
    expect(user.id).toBeUndefined()
    expect(user.username).toBeUndefined()
    expect(user.name).toBeUndefined()
    expect(user.bio).toBeUndefined()
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

	test('2) Create an User object', () => {
    const user = new User(1, "aljesbacarre", "Aljes", "Bio")
		expect(user.id).toBe(1)
		expect(user.username).toBe("aljesbacarre")
		expect(user.name).toBe("Aljes")
		expect(user.bio).toBe("Bio")
	});

	test('3) Add getters', () => {
    const user = new User(1, "aljesbacarre", "Aljes", "Bio")
		expect(user.getUsername).toBe("aljesbacarre")
		expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
	});

	test('4) Add setters', () => {
    const user = new User(1, "aljesbacarre", "Carlo", "Bio")
    user.setUsername = "Bacarre"
		expect(user.username).toBe("Bacarre")

    user.setBio = "New bio"
		expect(user.bio).toBe("New bio")
	});

})