class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
    }
}

class MandatoryError extends Error {
    constructor(message) {
        super(message);
        this.name = "MandatoryError";
    }
}

class FailedCreateError extends Error {
    constructor(message) {
        super(message);
        this.name = "CreationFailed";
    }
}

class GlobalError extends Error {
    constructor(message) {
        super(message);
        this.name = "GlobalError";
    }
}

module.exports = {
    ValidationError, UnauthorizedError, MandatoryError, FailedCreateError, GlobalError
}
