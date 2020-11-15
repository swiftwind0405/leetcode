--  Write your MySQL query statement below
--  使用 DENSE_RANK() 函数 进行 排序
select score, DENSE_RANK() OVER (ORDER BY Score DESC) as 'Rank'
from Scores;
