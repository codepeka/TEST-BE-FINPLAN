-- Soal No. 1
CREATE INDEX data_users_idx ON users(id);
CREATE INDEX data_hobbies_idx ON hobbies(id);
CREATE INDEX data_map_user_hobby_idx ON map_user_hobby(id);

-- Soal No. 2
SELECT u.gender as gender, count(gender) as total  FROM users u LEFT JOIN map_user_hobby m ON m.id_user = u.id LEFT JOIN hobbies h ON m.id_hobby  =  h.id  WHERE h.name = 'Skipping' GROUP BY u.gender;

-- Soal No. 3
SELECT u.name as name_user, count(m.id_user) as total FROM users u LEFT JOIN map_user_hobby m ON m.id_user = u.id WHERE m.status = 'active' GROUP BY m.id_user;

-- Soal No. 4
SELECT u.name as name, (sum(h.level) / count(m.id_user)) as level_avg FROM users u LEFT JOIN map_user_hobby m ON m.id_user = u.id LEFT JOIN hobbies h ON h.id = m.id_hobby GROUP BY m.id_user HAVING count(m.id_user) > 1;