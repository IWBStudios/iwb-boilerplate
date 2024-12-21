---
---@param action string The action to be sent to the NUI.
---@param data? table Optional data to be sent to the NUI. Defaults to nil if not provided.
---@param focus? table Optional inputs to be active in NUI. Defaults to false if not provided.
--- * keyboard [ boolean ] -- Optional param indicating whether keyboard input should be enabled in the NUI. Defaults to false if not provided.
--- * mouse [ boolean ] -- Optional param indicating whether mouse input should be enabled in the NUI. Defaults to false if not provided.
---
function SendMessage(action, data, focus)
    data = data or nil
    focus = focus or nil

    SendNUIMessage({
        action = action,
        data = data,
    })

    if focus then
        local keyboard = focus.keyboard or false
        local mouse = focus.mouse or false

        SetFocus(focus)
    end
end

---
---@param focus table The inputs to be active in NUI. Defaults to false if not provided.
--- * keyboard [ boolean ] -- Optional param indicating whether keyboard input should be enabled in the NUI. Defaults to false if not provided.
--- * mouse [ boolean ] -- Optional param indicating whether mouse input should be enabled in the NUI. Defaults to false if not provided.
---
function SetFocus(focus)
    focus = focus or {}

    local keyboard = focus.keyboard or false
    local mouse = focus.mouse or false

    SetNuiFocus(keyboard, mouse)
end
