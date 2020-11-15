-- Write your MySQL query statement below
-- 利用 mod 函数判断 奇偶
select *
from cinema
where mod(id, 2) = 1 and description != 'boring'
order by rating DESC
;