# Yarn.js

Yarnwrap helper functions. This module has a Java dependency of [**Yarnwrap**](https://github.com/FabricCore/yarnwrap).

### Installation

#### Using [pully](https://github.com/FabricCore/pully)

```
/pully install yarn
```

#### Require as Dependency

```json
{
  "dependencies": {
    "yarn": "0.1.0"
  }
}
```

#### Manual Install

1. [Download **yarn**](https://github.com/FabricCore/yarn/archive/refs/heads/master.zip).
2. Unzip file content to _.minecraft/config/jscore/modules/yarn/_

The folder should look like this

```
.minecraft/config/jscore/
└── modules/
    └── yarn/
        └── package.json
```

## Getters

|Identifier|Type|Description|
|---|---|---|
|**yarn.client()**|[**MinecraftClient**](https://yarnwrap.siri.ws/build/latest.html?q=client.MinecraftClient)|Instance of **MinecarftClient**|
|**yarn.clientPlayer()**|[**ClientPlayerEntity**](https://yarnwrap.siri.ws/build/latest.html?q=client.network.ClientPlayerEntity)|Current player|
|**yarn.player()**|[**PlayerEntity**](https://yarnwrap.siri.ws/build/latest.html?q=entity.player.PlayerEntity)|Current player|
|**yarn.playerLiving()**|[**LivingEntity**](https://yarnwrap.siri.ws/build/latest.html?q=entity.LivingEntity)|Current player|
|**yarn.playerEntity()**|[**Entity**](https://yarnwrap.siri.ws/build/latest.html?q=entity.Entity)|Current player|

> *"One day I'll figure out how to determine whether one Minecraft class inherits another."*

A list of all Fabric API events imports can be found in [**events.js**](https://github.com/FabricCore/yarn.js/blob/master/events.js).

Check the [events index](https://wiki.fabricmc.net/tutorial:event_index) page on the Fabric wiki for more info.

## Library Functions

#### yarn.to(target: Class, input: JavaObjectA) → JavaObjectB

Attempt to cast **input** to the target (Java) class, would throw an error if failed.

#### yarn.to(target: Class) → F
***where F: (input: JavaObject A) → JavaObjectB***

Returns a function which casts **input** to the target (Java) class.

#### yarn.toPlayerEntity(input: JavaObject) → [PlayerEntity](https://yarnwrap.siri.ws/build/latest.html?q=entity.player.PlayerEntity)

Attempts to convert to **PlayerEntity**.

#### yarn.toLivingEntity(input: JavaObject) → [LivingEntity](https://yarnwrap.siri.ws/build/latest.html?q=entity.LivingEntity)

Attempts to convert to **LivingEntity**.

#### yarn.toEntity(input: JavaObject) → [Entity](https://yarnwrap.siri.ws/build/latest.html?q=entity.Entity)

Attempts to convert to **Entity**.
