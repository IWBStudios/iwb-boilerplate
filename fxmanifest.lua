--[[ FX Information ]]
fx_version "cerulean"
game "gta5"
lua54 "on"
-- use_experimental_fxv2_oal "yes"

--[[ Resource Information ]]
author "IWB Studios"
description "This is a boilerplate resource."
version "1.0.0"
repository 'https://github.com/IWBStudios/iwb-boilerplate'
-- discord      ''

--[[ Manifest ]]
shared_scripts {
    "@es_extended/imports.lua",
    "@ox_lib/init.lua",
    "resource/shared/*.lua",
    "resource/locales/*.lua",
}

client_scripts {
    "resource/client/**/*.lua",
}

server_scripts {
    "@mysql-async/lib/MySQL.lua",
    "resource/server/**/*.lua",
}

ui_page {
    "web/dist/index.html",
}

files {
    "web/dist/**/*.*",
}

-- dependencies {
-- }

-- exports {
-- }

-- server_exports {
-- }
