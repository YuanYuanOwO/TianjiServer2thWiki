# 优化说明

这里记载了天际服的工业区服务端文件(bukkit.yml spigot.yml leaves.yml等)

参考资料：[Paperchan优化指南](https://paper-chan.moe/paper-optimization/)，[PaperMC官方文档](https://docs.papermc.io/paper)，[Leaves文档](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration)

## server.properties

::: details 点此展开（ 63 行 ）

```yaml
#Minecraft server properties
#Thu Jul 18 21:12:18 CST 2024
accepts-transfers=false
allow-flight=false
allow-nether=true
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
debug=false
difficulty=hard
enable-command-block=false
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
motd=redstone server
network-compression-threshold=64
online-mode=false
op-permission-level=4
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
server-port=******
simulation-distance=10
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=0
sync-chunk-writes=true
text-filtering-config=
use-native-transport=******
view-distance=10
white-list=false
```

:::

## bukkit.yml

::: details 点此展开（ 32 行 ）

```yaml
settings:
  allow-end: true
  warn-on-overload: true
  permissions-file: permissions.yml
  update-folder: update
  plugin-profiling: false
  connection-throttle: -1
  query-plugins: true
  deprecated-verbose: default
  shutdown-message: Server closed
  minimum-api: none
  use-map-color-cache: true
spawn-limits:
  monsters: 70
  animals: 10
  water-animals: 5
  water-ambient: 20
  water-underground-creature: 5
  axolotls: 5
  ambient: 15
chunk-gc:
  period-in-ticks: 600
ticks-per:
  animal-spawns: 400
  monster-spawns: 1
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

::: details 点此展开（ 181 行 ）

```yaml
# This is the main configuration file for Spigot.
# As you can see, there's tons to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# For a reference for any variable inside this file, check out the Spigot wiki at
# http://www.spigotmc.org/wiki/spigot-configuration/
#
# If you need help with the configuration or have any questions related to Spigot,
# join us at the Discord or drop by our forums and leave a post.
#
# Discord: https://www.spigotmc.org/go/discord
# Forums: http://www.spigotmc.org/

messages:
  whitelist: You are not whitelisted on this server!
  unknown-command: Unknown command. Type "/help" for help.
  server-full: The server is full!
  outdated-client: Outdated client! Please use {0}
  outdated-server: Outdated server! I'm still on {0}
  restart: Server is restarting
world-settings:
  default:
    unload-frozen-chunks: false
    below-zero-generation-in-existing-chunks: true
    view-distance: default
    merge-radius:
      item: 2.5
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
      raiders: 48
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
    simulation-distance: default
    thunder-chance: 100000
    verbose: false
  worldeditregentempworld:
    verbose: false
advancements:
  disable-saving: false
  disabled:
  - minecraft:story/disabled
settings:
  timeout-time: 20000
  restart-on-crash: true
  restart-script: ./start.sh
  save-user-cache-on-stop-only: false
  sample-count: 12
  bungeecord: true
  player-shuffle: 0
  user-cache-size: 1000
  moved-wrongly-threshold: 0.0625
  moved-too-quickly-multiplier: 10.0
  netty-threads: 4
  attribute:
    maxHealth:
      max: 2048.0
    movementSpeed:
      max: 2048.0
    attackDamage:
      max: 2048.0
  log-villager-deaths: true
  log-named-deaths: true
  debug: false
commands:
  spam-exclusions:
  - /skill
  silent-commandblock-console: false
  replace-commands:
  - setblock
  - summon
  - testforblock
  - tellraw
  log: true
  tab-complete: 0
  send-namespaced: true
players:
  disable-saving: false
config-version: 12
stats:
  disable-saving: false
  forced-stats: {}
```

:::

## paper-world-defaults.yml

::: details 点此展开（ 318 行 ）

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
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 31
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 3
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
  obfuscation:
    items:
      hide-durability: false
      hide-itemmeta: false
      hide-itemmeta-with-visual-effects: false
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
  prevent-moving-into-unloaded-chunks: false
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
    zombie-villager-infection-chance: default
    zombies-target-turtle-eggs: true
  entities-target-with-follow-range: false
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
    despawn-ranges:
      ambient:
        hard: 128
        soft: 32
      axolotls:
        hard: 128
        soft: 32
      creature:
        hard: 128
        soft: 32
      misc:
        hard: 128
        soft: 32
      monster:
        hard: 128
        soft: 32
      underground_water_creature:
        hard: 128
        soft: 32
      water_ambient:
        hard: 64
        soft: 32
      water_creature:
        hard: 128
        soft: 32
    disable-mob-spawner-spawn-egg-transformation: false
    duplicate-uuid:
      mode: SAFE_REGEN
      safe-regen-delete-range: 32
    filter-bad-tile-entity-nbt-from-falling-blocks: true
    filtered-entity-tag-nbt-paths:
    - Pos
    - Motion
    - SleepingX
    - SleepingY
    - SleepingZ
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
  disable-teleportation-suffocation-check: false
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
  water-over-lava-flow-speed: 5
feature-seeds:
  generate-random-seeds-for-all: false
fishing-time-range:
  maximum: 600
  minimum: 100
fixes:
  disable-unloaded-chunk-enderpearl-exploit: true
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
  disable-end-credits: false
  disable-relative-projectile-velocity: false
  disable-sprint-interruption-on-attack: false
  light-queue-size: 20
  max-leash-distance: 10.0
  redstone-implementation: VANILLA
  shield-blocking-delay: 5
  show-sign-click-command-failure-msgs-to-player: false
  update-pathfinding-on-block-update: true
scoreboards:
  allow-non-player-entities-on-scoreboards: true
  use-vanilla-world-scoreboard-name-coloring: false
spawn:
  allow-using-signs-inside-spawn-protection: false
  keep-spawn-loaded: true
  keep-spawn-loaded-range: 10
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

::: details 点此展开（ 130 行 ）

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
# Docs: https://docs.papermc.io/
# Discord: https://discord.gg/papermc
# Website: https://papermc.io/

_version: 29
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
  io-threads: -1
  worker-threads: -1
collisions:
  enable-player-collisions: true
  send-full-pos-for-hard-colliding-entities: true
commands:
  fix-target-selector-tag-completion: true
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
  compression-level: default
  fix-entity-position-desync: true
  load-permissions-yml-before-plugins: true
  max-joins-per-tick: 5
  region-file-cache-size: 256
  strict-advancement-dimension-check: false
  use-alternative-luck-formula: false
  use-dimension-type-for-custom-spawners: false
packet-limiter:
  all-packets:
    action: KICK
    interval: 7.0
    max-packet-rate: 1313.0
  kick-message: <red><lang:disconnect.exceeded_packet_rate>
  overrides:
    ServerboundPlaceRecipePacket:
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
    enabled: false
    online-mode: false
    secret: ******
scoreboards:
  save-empty-scoreboard-teams: false
  track-plugin-scoreboards: false
spam-limiter:
  incoming-packet-threshold: 300
  recipe-spam-increment: 1
  recipe-spam-limit: 20
  tab-spam-increment: 1
  tab-spam-limit: 500
timings:
  enabled: true
  hidden-config-entries:
  - database
  - proxies.velocity.secret
  history-interval: 300
  history-length: 3600
  server-name: Unknown Server
  server-name-privacy: false
  url: https://timings.aikar.co/
  verbose: true
unsupported-settings:
  allow-headless-pistons: false
  allow-permanent-block-break-exploits: false
  allow-piston-duplication: false
  allow-tripwire-disarming-exploits: false
  allow-unsafe-end-portal-teleportation: false
  compression-format: ZLIB
  perform-username-validation: true
watchdog:
  early-warning-delay: 10000
  early-warning-every: 5000
```

:::

## leaves.yml

::: details 点此展开（ 163 行 ）

```yaml
# Configuration file for Leaves.

config-version: 5
settings:
  protocol:
    bladeren:
      protocol: true
      mspt-sync-protocol: false
      mspt-sync-tick-interval: 20
    syncmatica:
      enable: false
      quota: false
      quota-limit: 40000000
    pca-sync-protocol: false
    pca-sync-player-entity: OPS
    bbor-protocol: false
    jade-protocol: false
    alternative-block-placement: NONE
    appleskin-protocol: true
    xaero-map-protocol: true
    xaero-map-server-id: 1758557773
    servux-protocol: false
    leaves-carpet-support: true
  misc:
    leaves-packet-event: false
    auto-update:
      enable: false
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
  region:
    format: ANVIL
    linear:
      flush-frequency: 10
      auto-convert-anvil-to-linear: false
      flush-max-threads: 1
      compression-level: 1
  fix:
    vanilla-hopper: false
  modify:
    fakeplayer:
      enable: true
      unable-fakeplayer-names:
      - player-name
      limit: 10
      prefix: ''
      suffix: ''
      always-send-data: true
      resident-fakeplayer: true
      open-fakeplayer-inventory: false
      skip-sleep-check: true
      spawn-phantom: false
      regen-amount: 0.01
      use-action: true
      modify-config: false
    elytra-aeronautics:
      no-chunk-load: false
      no-chunk-height: 500.0
      no-chunk-speed: -1.0
      message: true
      message-start: Flight enter cruise mode
      message-end: Flight exit cruise mode
    redstone-shears-wrench: true
    budding-amethyst-can-push-by-piston: false
    spectator-dont-get-advancement: false
    stick-change-armorstand-arm-status: true
    snowball-and-egg-can-knockback-player: true
    flatten-triangular-distribution: false
    player-operation-limiter: false
    renewable-elytra: -1.0
    stackable-shulker-boxes: 'false'
    force-void-trade: true
    disable-moved-wrongly-threshold: false
    mc-technical-survival-mode: true
    return-nether-portal-fix: true
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
    ignore-lc: false
    disable-packet-limit: false
    lava-riptide: false
    no-block-update-command: false
    no-tnt-place-update: false
    raider-die-skip-self-raid-check: true
    container-passthrough: false
    avoid-anvil-too-expensive: false
    bow-infinity-fix: false
    hopper-counter: false
    spider-jockeys-drop-gapples: -1.0
    renewable-deepslate: false
    renewable-sponges: false
    renewable-coral: 'FALSE'
    fast-resume: false
    force-peaceful-mode: -1
    minecraft-old:
      shears-in-dispenser-can-zero-amount: false
      instant-block-updater-reintroduced: false
      armor-stand-cant-kill-by-mob-projectile: false
      cce-update-suppression: false
      villager-infinite-discounts: false
      copper-bulb-1gt-delay: false
      crafter-1gt-delay: false
      redstone-wire-dont-connect-if-on-trapdoor: false
      mending-compatibility-infinity: false
      zero-tick-plants: false
      rng-fishing: false
      protection-stacking: false
  performance:
    remove:
      tick-guard-lambda: true
      inventory-contains-iterators: true
      range-check-streams-and-iterators: true
      damage-lambda: true
    optimized-dragon-respawn: false
    dont-send-useless-entity-packets: true
    optimize-entity-coordinate-key: true
    enable-suffocation-optimization: true
    check-spooky-season-once-an-hour: true
    optimize-chunk-ticking: true
    entity-target-find-optimization: true
    use-more-thread-unsafe-random: true
    inactive-goal-selector-disable: false
    reduce-entity-allocations: true
    cache-climb-check: true
    biome-temperatures-use-aging-cache: true
    reduce-entity-fluid-lookup: true
    reduce-chuck-load-and-lookup: true
    improve-fluid-direction-caching: true
    cache-ignite-odds: true
    faster-chunk-serialization: true
    optimize-world-generation-and-block-access: true
    cache-world-generator-sea-level: true
    skip-secondary-POI-sensor-if-absent: true
    cache-CubeVoxelShape-shape-array: true
    store-mob-counts-in-array: true
    cache-BlockStatePairKey-hash: true
    optimize-noise-generation: false
    optimize-sun-burn-tick: true
    optimized-CubePointRange: true
    check-frozen-ticks-before-landing-block: true
    skip-entity-move-if-movement-is-zero: true
    skip-cloning-advancement-criteria: false
    skip-negligible-planar-movement-multiplication: true
    fix-villagers-dont-release-memory: false
```

:::