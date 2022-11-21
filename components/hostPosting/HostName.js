import { useAuth } from "../../AuthContext/AuthContext"
import { motion } from "framer-motion"

export default function HostName() {
    const { currentUser } = useAuth();
    const Name = currentUser.displayName.slice(0, 1).toUpperCase() + currentUser.displayName.slice(1)
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
        >
            <p className="text-[#f5f5f5] text-4xl font-semibold pb-2">
                {currentUser?.displayName ? "Hello, " + Name : ""}
            </p>
        </motion.div>
    )
}