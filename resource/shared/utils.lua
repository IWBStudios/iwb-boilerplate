---
---@param data table Formats json data for better readability.
---
function json.format(data)
    if type(data) ~= "table" then
        print("^1Passed data is not of type: table.")
        return
    end

    return json.encode(data, { indent = true, indentCount = 4 })
end

---
---@param key string Translates the key into the chosen Locale in the Config.
---@param ... any Params importing data into the Locale.
---
function Translate(key, ...)
    if not Config.Locale then print("^1YOU MESSED UP THE TRANSLATION IMPORT") end
    return string.format(Locales[Config.Locale][key], ...)
end
