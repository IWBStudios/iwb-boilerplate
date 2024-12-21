local function init()
    Citizen.Wait(500)

    SendMessage('initNUI', {
        setUseNuiConfig = Config.useNuiConfig,
        setLocales = Locales[Config.Locale],
    })
end

AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then return end

    print('The resource "' .. resourceName .. '" has started.')
    init()
end)

AddEventHandler('playerSpawned', function()
    print('Player ped has spawned.')
    init()
end)

RegisterCommand('showBoilerplate', function()
    SendMessage('showBoilerplate', nil, { keyboard = true, mouse = true })
end, false)

RegisterNuiCallback('closeNUI', function(_, cb)
    SetFocus({})
    cb('ok')
end)

local langTest = 'IWB Studios'
print('[Client] testing Lang function: ', Translate('test', langTest))
