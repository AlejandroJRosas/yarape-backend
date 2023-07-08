SELECT 
  c.career_id AS id, 
  c.name AS name, 
  array_agg(cam.name) AS campus
FROM 
  careers AS c,
  campus AS cam,
  careers_in_campus AS cic
WHERE
  c.career_id = cic.career_id AND
  cic.campus_id = cam.campus_id
GROUP BY
  c.career_id,
  c.name;