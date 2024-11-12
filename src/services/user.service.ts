import mysql, { RowDataPacket } from 'mysql2';
import User from "@/types/user";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cake_db',
  connectionLimit: 100,
});

const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `users`", (error, results) => {
      if (error) {
        console.log("MySQL Error:", error.message);
        reject(error.message);
        return;
      }
      resolve(results as User[]); // Cast results to User[]
    });
  });
};

const insertUser = async (userData: { fullName: string; username: string; password: string }) => {
  return new Promise<void>((resolve, reject) => {
    const query = "INSERT INTO `users` (`fullname`, `username`, `password`) VALUES (?, ?, ?)";
    const values = [userData.fullName, userData.username, userData.password];

    pool.query(query, values, (error) => {
      if (error) {
        console.log("MySQL Error:", error.message);
        reject(error.message);
        return;
      }
      resolve();
    });
  });
};

export { getUsers, insertUser };