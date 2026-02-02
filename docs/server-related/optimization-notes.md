# 优化说明

这里记载了天际服的工业区服务端文件 (bukkit.yml spigot.yml leaves.yml 等)

参考资料：[Paperchan 优化指南](https://paper-chan.moe/paper-optimization/)，[PaperMC 官方文档](https://docs.papermc.io/paper)，[Leaves 文档](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration)

## server.properties

::: details 点此展开（63 行）

```yaml
#Minecraft server properties
#Fri Jan 30 16:42:25 CST 2026
accepts-transfers=false
allow-flight=true
allow-nether=true
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
bug-report-link=
debug=false
difficulty=hard
enable-command-block=true
enable-jmx-monitoring=false
enable-query=false
enable-rcon=false
enable-status=true
enforce-secure-profile=false
enforce-whitelist=false
entity-broadcast-range-percentage=100
force-gamemode=false
function-permission-level=2
gamemode=survival
generate-structures=true
generator-settings={}
hardcore=false
hide-online-players=false
initial-disabled-packs=
initial-enabled-packs=vanilla
level-name=world
level-seed=******
level-type=minecraft\:normal
log-ips=true
max-chained-neighbor-updates=1000000
max-players=128
max-tick-time=60000
max-world-size=29999984
motd=Tianji 14th redstone server
network-compression-threshold=-1
online-mode=false
op-permission-level=4
pause-when-empty-seconds=-1
player-idle-timeout=0
prevent-proxy-connections=false
pvp=true
query.port=******
rate-limit=0
rcon.password=******
rcon.port=******
region-file-compression=deflate
require-resource-pack=false
resource-pack=
resource-pack-id=
resource-pack-prompt=
resource-pack-sha1=
server-ip=0.0.0.0
server-name=Unknown Server
server-port=******
simulation-distance=10
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=0
sync-chunk-writes=true
text-filtering-config=
text-filtering-version=0
use-native-transport=******
view-distance=6
white-list=false
```

:::

## bukkit.yml

::: details 点此展开（32 行）

```yaml
settings:
  allow-end: true
  warn-on-overload: true
  permissions-file: permissions.yml
  update-folder: update
  plugin-profiling: false
  connection-throttle: 4000
  query-plugins: true
  deprecated-verbose: default
  shutdown-message: Server closed
  minimum-api: none
  use-map-color-cache: true
spawn-limits:
  monsters: 70
  animals: 1
  water-animals: 10
  water-ambient: 10
  water-underground-creature: 10
  axolotls: 1
  ambient: 1
chunk-gc:
  period-in-ticks: 600
ticks-per:
  animal-spawns: 400
  monster-spawns: 5
  water-spawns: 1
  water-ambient-spawns: 1
  water-underground-creature-spawns: 1
  axolotl-spawns: 1
  ambient-spawns: 1
  autosave: 6000
aliases: now-in-commands.yml
```

:::

## spigot.yml

::: details 点此展开（181 行）

```yaml
# This is the Spigot configuration file for Paper.
# As you can see, there's tons to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
#
# If you need help with the configuration or have any questions related to Paper,
# join us in our Discord or check the docs page.
#
# File Reference: https://docs.papermc.io/paper/reference/spigot-configuration/
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

messages:
  whitelist: You are not whitelisted on this server!
  unknown-command: Unknown command. Type "/help" for help.
  server-full: The server is full!
  outdated-client: Outdated client! Please use {0}
  outdated-server: Outdated server! I'm still on {0}
  restart: Server is restarting
settings:
  bungeecord: false
  save-user-cache-on-stop-only: false
  sample-count: 12
  player-shuffle: 0
  user-cache-size: 1000
  moved-wrongly-threshold: 0.0625
  moved-too-quickly-multiplier: 10.0
  timeout-time: 60
  restart-on-crash: true
  restart-script: ./start.sh
  netty-threads: 4
  attribute:
    maxAbsorption:
      max: 2048.0
    maxHealth:
      max: 1024.0
    movementSpeed:
      max: 1024.0
    attackDamage:
      max: 2048.0
  log-villager-deaths: true
  log-named-deaths: true
  debug: false
advancements:
  disable-saving: false
  disabled:
  - minecraft:story/disabled
world-settings:
  default:
    below-zero-generation-in-existing-chunks: true
    view-distance: default
    simulation-distance: default
    thunder-chance: 100000
    merge-radius:
      item: 0.5
      exp: 3.0
    mob-spawn-range: 8
    item-despawn-rate: 6000
    arrow-despawn-rate: 1200
    trident-despawn-rate: 1200
    zombie-aggressive-towards-villager: true
    nerf-spawner-mobs: false
    enable-zombie-pigmen-portal-spawns: true
    wither-spawn-sound-radius: 0
    end-portal-sound-radius: 0
    hanging-tick-frequency: 100
    unload-frozen-chunks: false
    growth:
      cactus-modifier: 100
      cane-modifier: 100
      melon-modifier: 100
      mushroom-modifier: 100
      pumpkin-modifier: 100
      sapling-modifier: 100
      beetroot-modifier: 100
      carrot-modifier: 100
      potato-modifier: 100
      torchflower-modifier: 100
      wheat-modifier: 100
      netherwart-modifier: 100
      vine-modifier: 100
      cocoa-modifier: 100
      bamboo-modifier: 100
      sweetberry-modifier: 100
      kelp-modifier: 100
      twistingvines-modifier: 100
      weepingvines-modifier: 100
      cavevines-modifier: 100
      glowberry-modifier: 100
      pitcherplant-modifier: 100
    entity-activation-range:
      animals: 32
      monsters: 32
      raiders: 64
      misc: 16
      water: 16
      villagers: 32
      flying-monsters: 32
      wake-up-inactive:
        animals-max-per-tick: 4
        animals-every: 1200
        animals-for: 100
        monsters-max-per-tick: 8
        monsters-every: 400
        monsters-for: 100
        villagers-max-per-tick: 4
        villagers-every: 600
        villagers-for: 100
        flying-monsters-max-per-tick: 8
        flying-monsters-every: 200
        flying-monsters-for: 100
      villagers-work-immunity-after: 100
      villagers-work-immunity-for: 20
      villagers-active-for-panic: true
      tick-inactive-villagers: true
      ignore-spectators: false
    entity-tracking-range:
      players: 48
      animals: 48
      monsters: 48
      misc: 32
      display: 128
      other: 64
    ticks-per:
      hopper-transfer: 8
      hopper-check: 1
    hopper-amount: 1
    hopper-can-load-chunks: false
    dragon-death-sound-radius: 0
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    seed-protected: ******
    hunger:
      jump-walk-exhaustion: 0.05
      jump-sprint-exhaustion: 0.2
      combat-exhaustion: 0.1
      regen-exhaustion: 6.0
      swim-multiplier: 0.01
      sprint-multiplier: 0.1
      other-multiplier: 0.0
    max-tnt-per-tick: 100
    max-tick-time:
      tile: 50
      entity: 50
    verbose: false
  worldeditregentempworld:
    verbose: false
players:
  disable-saving: false
config-version: 12
stats:
  disable-saving: false
  forced-stats: {}
commands:
  tab-complete: 0
  send-namespaced: true
  log: true
  spam-exclusions:
  - /skill
  silent-commandblock-console: false
  replace-commands:
  - setblock
  - summon
  - testforblock
  - tellraw
  enable-spam-exclusions: false
```

:::

## paper-world-defaults.yml

::: details 点此展开（318 行）

```yaml
# This is the world defaults configuration file for Paper.
# As you can see, there's a lot to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# 
# If you need help with the configuration or have any questions related to Paper,
# join us in our Discord or check the docs page.
# 
# Configuration options here apply to all worlds, unless you specify overrides inside
# the world-specific config file inside each world folder.
# 
# File Reference: https://docs.papermc.io/paper/reference/world-configuration/
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 31
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: false
    max-block-height: 64
    replacement-blocks:
    - stone
    - oak_planks
    - deepslate
    update-radius: 2
    use-permission: false
chunks:
  auto-save-interval: default
  delay-chunk-unloads-by: 10s
  entity-per-chunk-save-limit:
    arrow: -1
    ender_pearl: -1
    experience_orb: -1
    fireball: -1
    small_fireball: -1
    snowball: -1
  fixed-chunk-inhabited-time: -1
  flush-regions-on-save: false
  max-auto-save-chunks-per-tick: 24
  prevent-moving-into-unloaded-chunks: true
collisions:
  allow-player-cramming-damage: false
  allow-vehicle-collisions: true
  fix-climbing-bypassing-cramming-rule: false
  max-entity-collisions: 8
  only-players-collide: false
command-blocks:
  force-follow-perm-level: true
  permissions-level: 2
entities:
  armor-stands:
    do-collision-entity-lookups: true
    tick: true
  behavior:
    allow-spider-world-border-climbing: true
    baby-zombie-movement-modifier: 0.5
    cooldown-failed-beehive-releases: true
    disable-chest-cat-detection: false
    disable-creeper-lingering-effect: false
    disable-player-crits: false
    door-breaking-difficulty:
      husk:
      - HARD
      vindicator:
      - NORMAL
      - HARD
      zombie:
      - HARD
      zombie_villager:
      - HARD
      zombified_piglin:
      - HARD
    ender-dragons-death-always-places-dragon-egg: false
    experience-merge-max-value: -1
    mobs-can-always-pick-up-loot:
      skeletons: false
      zombies: false
    nerf-pigmen-from-nether-portals: false
    only-merge-items-horizontally: false
    parrots-are-unaffected-by-player-movement: false
    phantoms-do-not-spawn-on-creative-players: true
    phantoms-only-attack-insomniacs: true
    phantoms-spawn-attempt-max-seconds: 119
    phantoms-spawn-attempt-min-seconds: 60
    piglins-guard-chests: true
    pillager-patrols:
      disable: false
      spawn-chance: 0.2
      spawn-delay:
        per-player: false
        ticks: 12000
      start:
        day: 5
        per-player: false
    player-insomnia-start-ticks: 72000
    should-remove-dragon: false
    spawner-nerfed-mobs-should-jump: false
    stuck-entity-poi-retry-delay: 200
    zombie-villager-infection-chance: default
    zombies-target-turtle-eggs: true
  markers:
    tick: true
  mob-effects:
    immune-to-wither-effect:
      wither: true
      wither-skeleton: true
    spiders-immune-to-poison-effect: true
  sniffer:
    boosted-hatch-time: default
    hatch-time: default
  spawning:
    all-chunks-are-slime-chunks: false
    alt-item-despawn-rate:
      enabled: false
      items:
        cobblestone: 300
    count-all-mobs-for-spawning: false
    creative-arrow-despawn-rate: default
    despawn-range-shape: ELLIPSOID
    despawn-ranges:
      ambient:
        hard: default
        soft: default
      axolotls:
        hard: default
        soft: default
      creature:
        hard: default
        soft: default
      misc:
        hard: default
        soft: default
      monster:
        hard: default
        soft: default
      underground_water_creature:
        hard: default
        soft: default
      water_ambient:
        hard: default
        soft: default
      water_creature:
        hard: default
        soft: default
    despawn-time:
      llama_spit: disabled
      snowball: disabled
    disable-mob-spawner-spawn-egg-transformation: false
    duplicate-uuid:
      mode: SAFE_REGEN
      safe-regen-delete-range: 32
    filter-bad-tile-entity-nbt-from-falling-blocks: true
    filtered-entity-tag-nbt-paths:
    - Pos
    - Motion
    - sleeping_pos
    iron-golems-can-spawn-in-air: false
    monster-spawn-max-light-level: default
    non-player-arrow-despawn-rate: default
    per-player-mob-spawns: true
    scan-for-legacy-ender-dragon: true
    skeleton-horse-thunder-spawn-chance: default
    slime-spawn-height:
      slime-chunk:
        maximum: 40.0
      surface-biome:
        maximum: 70.0
        minimum: 50.0
    spawn-limits:
      ambient: -1
      axolotls: -1
      creature: -1
      monster: -1
      underground_water_creature: -1
      water_ambient: -1
      water_creature: -1
    ticks-per-spawn:
      ambient: -1
      axolotls: -1
      creature: -1
      monster: -1
      underground_water_creature: -1
      water_ambient: -1
      water_creature: -1
    wandering-trader:
      spawn-chance-failure-increment: 25
      spawn-chance-max: 75
      spawn-chance-min: 25
      spawn-day-length: 24000
      spawn-minute-length: 1200
    wateranimal-spawn-height:
      maximum: default
      minimum: default
  tracking-range-y:
    animal: default
    display: default
    enabled: false
    misc: default
    monster: default
    other: default
    player: default
environment:
  disable-explosion-knockback: false
  disable-ice-and-snow: false
  disable-thunder: false
  fire-tick-delay: 30
  frosted-ice:
    delay:
      max: 40
      min: 20
    enabled: true
  generate-flat-bedrock: false
  locate-structures-outside-world-border: false
  max-block-ticks: 65536
  max-fluid-ticks: 65536
  nether-ceiling-void-damage-height: disabled
  optimize-explosions: false
  portal-create-radius: 16
  portal-search-radius: 128
  portal-search-vanilla-dimension-scaling: true
  treasure-maps:
    enabled: true
    find-already-discovered:
      loot-tables: default
      villager-trade: false
  void-damage-amount: 4.0
  void-damage-min-build-height-offset: -64.0
  water-over-lava-flow-speed: 5
feature-seeds:
  generate-random-seeds-for-all: false
fishing-time-range:
  maximum: 600
  minimum: 100
fixes:
  disable-unloaded-chunk-enderpearl-exploit: false
  falling-block-height-nerf: disabled
  fix-items-merging-through-walls: false
  prevent-tnt-from-moving-in-water: false
  split-overstacked-loot: true
  tnt-entity-height-nerf: disabled
hopper:
  cooldown-when-full: true
  disable-move-event: false
  ignore-occluding-blocks: false
lootables:
  auto-replenish: false
  max-refills: -1
  refresh-max: 2d
  refresh-min: 12h
  reset-seed-protected: ******
  restrict-player-reloot: true
  restrict-player-reloot-time: disabled
  retain-unlooted-shulker-box-loot-table-on-non-player-break: true
maps:
  item-frame-cursor-limit: 128
  item-frame-cursor-update-interval: 10
max-growth-height:
  seed-protected: ******
    max: 16
    min: 11
  cactus: 3
  reeds: 3
misc:
  allow-remote-ender-dragon-respawning: false
  alternate-current-update-order: HORIZONTAL_FIRST_OUTWARD
  disable-end-credits: false
  disable-relative-projectile-velocity: false
  disable-sprint-interruption-on-attack: false
  legacy-ender-pearl-behavior: false
  max-leash-distance: default
  redstone-implementation: VANILLA
  shield-blocking-delay: 5
  show-sign-click-command-failure-msgs-to-player: false
  update-pathfinding-on-block-update: true
scoreboards:
  allow-non-player-entities-on-scoreboards: true
  use-vanilla-world-scoreboard-name-coloring: false
spawn:
  allow-using-signs-inside-spawn-protection: false
tick-rates:
  behavior:
    villager:
      validatenearbypoi: -1
  container-update: 1
  dry-farmland: 1
  grass-spread: 1
  mob-spawner: 1
  sensor:
    villager:
      secondarypoisensor: 40
  wet-farmland: 1
unsupported-settings:
  disable-world-ticking-when-empty: false
  fix-invulnerable-end-crystal-exploit: true
```

:::

## paper-global.yml

::: details 点此展开（130 行）

```yaml
# This is the global configuration file for Paper.
# As you can see, there's a lot to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# 
# If you need help with the configuration or have any questions related to Paper,
# join us in our Discord or check the docs page.
# 
# The world configuration options have been moved inside
# their respective world folder. The files are named paper-world.yml
# 
# File Reference: https://docs.papermc.io/paper/reference/global-configuration/
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 30
anticheat:
  obfuscation:
    items:
      all-models:
        also-obfuscate: []
        dont-obfuscate:
        - minecraft:lodestone_tracker
        sanitize-count: true
      enable-item-obfuscation: false
      model-overrides:
        minecraft:elytra:
          also-obfuscate: []
          dont-obfuscate:
          - minecraft:damage
          sanitize-count: true
block-updates:
  disable-chorus-plant-updates: false
  disable-mushroom-block-updates: false
  disable-noteblock-updates: false
  disable-tripwire-updates: false
chunk-loading-advanced:
  auto-config-send-distance: true
  player-max-concurrent-chunk-generates: 0
  player-max-concurrent-chunk-loads: 0
chunk-loading-basic:
  player-max-chunk-generate-rate: -1.0
  player-max-chunk-load-rate: 100.0
  player-max-chunk-send-rate: 75.0
chunk-system:
  gen-parallelism: default
  io-threads: 6
  worker-threads: 8
collisions:
  enable-player-collisions: true
  send-full-pos-for-hard-colliding-entities: true
commands:
  ride-command-allow-player-as-vehicle: false
  suggest-player-names-when-null-tab-completions: true
  time-command-affects-all-worlds: false
console:
  enable-brigadier-completions: true
  enable-brigadier-highlighting: true
  has-all-permissions: false
item-validation:
  book:
    author: 8192
    page: 16384
    title: 8192
  book-size:
    page-max: 2560
    total-multiplier: 0.98
  display-name: 8192
  lore-line: 8192
  resolve-selectors-in-books: false
logging:
  deobfuscate-stacktraces: true
messages:
  kick:
    authentication-servers-down: <lang:multiplayer.disconnect.authservers_down>
    connection-throttle: Connection throttled! Please wait before reconnecting.
    flying-player: <lang:multiplayer.disconnect.flying>
    flying-vehicle: <lang:multiplayer.disconnect.flying>
  no-permission: <red>I'm sorry, but you do not have permission to perform this command.
    Please contact the server administrators if you believe that this is in error.
  use-display-name-in-quit-message: false
misc:
  chat-threads:
    chat-executor-core-size: -1
    chat-executor-max-size: -1
  client-interaction-leniency-distance: default
  compression-level: default
  load-permissions-yml-before-plugins: true
  max-joins-per-tick: 5
  prevent-negative-villager-demand: false
  region-file-cache-size: 256
  send-full-pos-for-item-entities: false
  strict-advancement-dimension-check: false
  use-alternative-luck-formula: false
  use-dimension-type-for-custom-spawners: false
  xp-orb-groups-per-area: default
packet-limiter:
  all-packets:
    action: KICK
    interval: 7.0
    max-packet-rate: 500.0
  kick-message: <red><lang:disconnect.exceeded_packet_rate>
  overrides:
    minecraft:place_recipe:
      action: DROP
      interval: 4.0
      max-packet-rate: 5.0
player-auto-save:
  max-per-tick: -1
  rate: -1
proxies:
  bungee-cord:
    online-mode: true
  proxy-protocol: false
  velocity:
    enabled: true
    online-mode: true
    secret: ******
scoreboards:
  save-empty-scoreboard-teams: true
  track-plugin-scoreboards: false
spam-limiter:
  incoming-packet-threshold: 300
  recipe-spam-increment: 1
  recipe-spam-limit: 20
  tab-spam-increment: 1
  tab-spam-limit: 500
spark:
  enable-immediately: false
  enabled: true
unsupported-settings:
  allow-headless-pistons: true
  allow-permanent-block-break-exploits: true
  allow-piston-duplication: true
  allow-unsafe-end-portal-teleportation: true
  compression-format: ZLIB
  perform-username-validation: true
  skip-tripwire-hook-placement-validation: false
  skip-vanilla-damage-tick-when-shield-blocked: false
  update-equipment-on-player-actions: true
watchdog:
  early-warning-delay: 10000
  early-warning-every: 5000
```

:::

## leaves.yml

::: details 点此展开（163 行）

```yaml
# Configuration file for Leaves.

config-version: 6
settings:
  misc:
    chat-command-max-length: 32767
    auto-update:
      enable: false
      download-source: application
      allow-experimental: false
      time:
      - '14:00'
      - '2:00'
    extra-yggdrasil-service:
      enable: false
      login-protect: false
      urls:
      - https://url.with.authlib-injector-yggdrasil
    disable-method-profiler: true
    no-chat-sign: true
    dont-respond-ping-before-start-fully: true
    server-lang: zh_cn
    server-mod-name: Leaves
    bstats-privacy-mode: false
    force-minecraft-command: false
    leaves-packet-event: true
  modify:
    hopper-counter:
      enable: false
      unlimited-speed: false
    fakeplayer:
      in-game:
        always-send-data: true
        skip-sleep-check: false
        spawn-phantom: false
        tick-type: NETWORK
        simulation-distance: -1
        enable-locator-bar: false
      enable: true
      unable-fakeplayer-names:
      - player-name
      limit: 10
      prefix: ''
      suffix: ''
      regen-amount: 0.0
      resident-fakeplayer: false
      open-fakeplayer-inventory: false
      use-action: true
      modify-config: false
      manual-save-and-load: false
      cache-skin: false
    elytra-aeronautics:
      no-chunk-load: false
      no-chunk-height: 500.0
      no-chunk-speed: -1.0
      message: true
      message-start: Flight enter cruise mode
      message-end: Flight exit cruise mode
    redstone-shears-wrench: true
    movable-budding-amethyst: false
    spectator-dont-get-advancement: false
    stick-change-armorstand-arm-status: true
    snowball-and-egg-can-knockback-player: true
    flatten-triangular-distribution: false
    player-operation-limiter: false
    renewable-elytra: -1.0
    shulker-box:
      stackable-shulker-boxes: 'false'
      same-nbt-stackable: false
    force-void-trade: false
    mc-technical-survival-mode: false
    return-nether-portal-fix: false
    use-vanilla-random: false
    fix-update-suppression-crash: true
    bedrock-break-list: false
    disable-distance-check-for-use-item: false
    no-feather-falling-trample: false
    shared-villager-discounts: false
    disable-check-out-of-order-command: false
    despawn-enderman-with-block: false
    creative-no-clip: false
    shave-snow-layers: true
    disable-packet-limit: false
    lava-riptide: false
    no-block-update-command: false
    no-tnt-place-update: false
    container-passthrough: false
    avoid-anvil-too-expensive: false
    bow-infinity-fix: false
    spider-jockeys-drop-gapples: -1.0
    renewable-deepslate: false
    renewable-sponges: false
    renewable-coral: 'FALSE'
    disable-vault-blacklist: false
    exp-orb-absorb-mode: VANILLA
    minecraft-old:
      old-raid-behavior: true
      shears-in-dispenser-can-zero-amount: false
      villager-infinite-discounts: false
      copper-bulb-1gt-delay: false
      crafter-1gt-delay: false
      zero-tick-plants: false
      rng-fishing: false
      allow-grindstone-overstacking: false
      allow-entity-portal-with-passenger: true
      disable-gateway-portal-entity-ticking: false
      disable-LivingEntity-ai-step-alive-check: false
      spawn-invulnerable-time: false
      old-hopper-suck-in-behavior: false
      old-zombie-piglin-drop: false
      old-zombie-reinforcement: false
      allow-anvil-destroy-item-entities: false
      tripwire-and-hook-behavior:
        string-tripwire-hook-duplicate: true
        tripwire-behavior: MIXED
      void-trade: true
      disable-item-damage-check: false
      old-throwable-projectile-tick-order: false
      keep-leash-connect-when-use-firework: false
      tnt-wet-explosion-no-item-damage: false
      old-projectile-explosion-behavior: false
      ender-dragon-part-can-use-end-portal: false
      block-updater:
        instant-block-updater-reintroduced: false
        cce-update-suppression: false
        sound-update-suppression: false
        redstone-ignore-upwards-update: false
        old-block-remove-behaviour: false
  performance:
    equipment-tracking: true
    sleeping-block-entity: true
    optimized-dragon-respawn: true
    dont-send-useless-entity-packets: true
    enable-suffocation-optimization: true
    check-spooky-season-once-an-hour: true
    inactive-goal-selector-disable: false
    reduce-entity-allocations: true
    cache-climb-check: true
    reduce-chuck-load-and-lookup: true
    cache-ignite-odds: true
    faster-chunk-serialization: true
    skip-secondary-POI-sensor-if-absent: true
    store-mob-counts-in-array: true
    optimize-noise-generation: false
    optimize-sun-burn-tick: true
    optimized-CubePointRange: true
    check-frozen-ticks-before-landing-block: true
    skip-entity-move-if-movement-is-zero: true
    skip-cloning-advancement-criteria: false
    skip-negligible-planar-movement-multiplication: true
    remove:
      tick-guard-lambda: true
      damage-lambda: true
  protocol:
    bladeren:
      protocol: true
      mspt-sync-protocol: true
      mspt-sync-tick-interval: 20
    syncmatica:
      enable: true
      quota: true
      quota-limit: 40000000
    pca:
      pca-sync-protocol: true
      pca-sync-player-entity: OPS
    appleskin:
      protocol: true
      sync-tick-interval: 20
    servux:
      litematics:
        enable: true
        max-nbt-size: 2097152
      hud-logger-protocol: true
      hud-enabled-loggers:
      - TPS
      - MOB_CAPS
      hud-update-interval: 1
      structure-protocol: true
      entity-protocol: true
      hud-metadata-protocol: true
      hud-metadata-protocol-share-seed: true
    bbor-protocol: true
    jade-protocol: true
    alternative-block-placement: NONE
    xaero-map-protocol: false
    xaero-map-server-id: -2046555435
    leaves-carpet-support: true
    rei-server-protocol: true
    chat-image-protocol: false
  region:
    format: ANVIL
    linear:
      version: V2
      flush-max-threads: 6
      flush-delay-ms: 100
      use-virtual-thread: true
      compression-level: 1
  fix:
    vanilla-end-void-rings: false
    collision-behavior: BLOCK_SHAPE_VANILLA
    vanilla-hopper: true
    vanilla-display-name: false
    vanilla-portal-handle: false
    vanilla-fluid-pushing: true

```

:::
