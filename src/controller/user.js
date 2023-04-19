import Users from "../mongo/user"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const maHoa = await bcrypt.hash(password, 10);
        const user = await Users.create({
            email,
            password: maHoa
        })
        user.password = undefined;
        return res.status(200).json({ message: "Đăng ký thành công" ,user})
    }
    catch { }
}

export const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email không tồn tại" })
        }
        const checkpass = await bcrypt.compare(password, user.password);
        if (!checkpass) {
            return res.status(400).json({ message: "Pass saii" })
        }
        const token = jwt.sign({ _id: Users._id }, "123")
        user.password = undefined;
        return res.status(200).json({
             message: "Đăng Nhập thành công", accToken: token, user })

    }
    catch { }
}