yarn.client = () => yarnwrap.client.MinecraftClient.getInstance();
yarn.clientPlayer = () => yarn.client().player();
yarn.player = () => yarn.toPlayerEntity(yarn.clientPlayer());
yarn.playerLiving = () => yarn.toLivingEntity(yarn.clientPlayer());
yarn.playerEntity = () => yarn.toEntity(yarn.clientPlayer());
