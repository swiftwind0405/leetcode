-- UNION 连接自查询 或者 使用 Where Or 
-- 因为 where or 比较熟悉 采用 UNION 进行题解

SELECT
    name, population, area
FROM
    world
WHERE
    area > 3000000

UNION

SELECT
    name, population, area
FROM
    world
WHERE
    population > 25000000
