/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groupMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        console.log(`${i}: 当前处理的字符串：${strs[i]}`)
        // 查找当前字符串与另外一个字符串是否是字母异位词
        let exist = false;
        for (let [key, { group, chatMap }] of groupMap) {
            console.log('groupMap key: ', key)
            // 先简单判断长度，不符合直接跳出此次循环
            if (strs[i].length !== key.length) {
                console.log('长度不一致继续循环')
                continue
            }
            const _chatMap = new Map(chatMap)
            for (let j = 0; j < strs[i].length; j++) {
                const chat = strs[i][j];
                console.log(`当前查找的字符=>${chat}`)
                const findChat = _chatMap.has(chat)
                console.log('findChat:', findChat)
                if (findChat) {
                    // 找到了，就把 value - 1
                    _chatMap.set(chat, _chatMap.get(chat) - 1)
                    continue
                }
                // 找不到则表面不符合，直接跳出循环
                console.log('不符合条件跳出循环')
                break
            }
            // 判断当前chatMap是否都已经被匹配完
            if (Array.from(_chatMap.values()).every(item => item === 0)) {
                console.warn(`===${strs[i]}存在字母异位词${key}===`)
                // 插入到匹配的group中
                group.push(strs[i])
                exist = true
                break
            }
        }

        if (!exist) {
            // 最后没有匹配的自己成立一组
            // 创建映射表，value 是各个字符出现次数的映射表 chatMap 和 最终要返回的分组 group
            // 各个字符出现次数的映射表 chatMap 举例：aabbc => {a => 2, b => 2, c => 1}
            const chatMap = new Map()
            strs[i].split('').forEach(s => {
                chatMap.set(s, chatMap.has(s) ? chatMap.get(s) + 1 : 1)
            })
            groupMap.set(strs[i], {
                group: [strs[i]],
                chatMap
            })
        }

    }
    return Array.from(groupMap.values()).map(item => item.group);
};


// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

// let strs = ["ddddddddddg","dgggggggggg"]

console.log(groupAnagrams(strs))
