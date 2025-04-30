Object.defineProperty(yarn, "client", {
    get: function () {
        return yarnwrap.client.MinecraftClient.getInstance();
    },
});

Object.defineProperty(yarn, "clientPlayer", {
    get: function () {
        return yarn.client.player();
    },
});

Object.defineProperty(yarn, "player", {
    get: function () {
        return yarn.toPlayerEntity(yarn.clientPlayer);
    },
});

Object.defineProperty(yarn, "playerLiving", {
    get: function () {
        return yarn.toLivingEntity(yarn.clientPlayer);
    },
});

Object.defineProperty(yarn, "playerEntity", {
    get: function () {
        return yarn.toEntity(yarn.clientPlayer);
    },
});
