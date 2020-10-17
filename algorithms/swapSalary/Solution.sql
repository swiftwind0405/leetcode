# Write your MySQL query statement below
UPDATE salary s 
SET s.sex = CASE sex 
            WHEN 'm' THEN 'f'
            ELSE 'm'
            END;