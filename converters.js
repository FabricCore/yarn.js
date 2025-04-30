yarn.to = (target, input) => {
    if (input == undefined)
        return (input) => {
            return new target(input.wrapperContained);
        };
    else return new target(input.wrapperContained);
};

yarn.toPlayerEntity = yarn.to(yarnwrap.entity.player.PlayerEntity);
yarn.toLivingEntity = yarn.to(yarnwrap.entity.LivingEntity);
yarn.toEntity = yarn.to(yarnwrap.entity.Entity);
