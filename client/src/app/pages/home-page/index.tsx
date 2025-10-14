import { motion } from "framer-motion";
import { ArrowRight, Layout, Users, Zap } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Link } from "react-router-dom";
import kanbanPreview from "@/shared/assets/images/kanban-preview.png";

const features = [
  {
    title: "Kéo thả linh hoạt",
    desc: "Tùy chỉnh cột và thẻ dễ dàng như chơi Lego.",
    icon: <Layout className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Cộng tác thời gian thực",
    desc: "Làm việc cùng đồng đội mà không sợ xung đột dữ liệu.",
    icon: <Users className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Hiệu suất tối đa",
    desc: "Tốc độ mượt mà, load nhanh như Linear và Notion.",
    icon: <Zap className="w-10 h-10 text-indigo-500" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center px-6 md:px-10 py-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          <Link to={`/`}>KanbanFlow</Link>
        </motion.h1>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/auth/signin">Đăng nhập</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/signup">Đăng ký</Link>
          </Button>
        </div>
      </header>

      <motion.section
        className="flex flex-col items-center text-center mt-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tổ chức công việc thông minh hơn
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Quản lý task, cộng tác với đồng đội và theo dõi tiến độ dễ dàng — tất
          cả trong một bảng Kanban trực quan.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" asChild>
            <a href="/kanban/dashboard" className="flex items-center gap-2">
              Bắt đầu ngay <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>
      </motion.section>

      <section className="mt-32 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="h-full flex flex-col justify-between border border-indigo-100 dark:border-gray-800 hover:shadow-md transition">
              <CardHeader className="flex-grow">
                <div className="mb-4">{f.icon}</div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                {f.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="mt-32 flex flex-col items-center px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-6">
          Trực quan hóa tiến độ với Kanban Board
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
          Kéo thả, thay đổi trạng thái và gắn nhãn — tất cả chỉ trong một cú
          click.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <img
            src={kanbanPreview}
            alt="Kanban Preview"
            className="w-[80vw] max-w-4xl"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-32 mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-3xl font-bold mb-6">Sẵn sàng bắt đầu chưa?</h3>
        <Button size="lg" asChild>
          <a href="/register" className="flex items-center gap-2">
            Dùng thử miễn phí <ArrowRight size={18} />
          </a>
        </Button>
      </motion.section>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500">
        © 2025 KanbanFlow • Built with React, Tailwind, Motion & Shadcn
      </footer>
    </div>
  );
}
