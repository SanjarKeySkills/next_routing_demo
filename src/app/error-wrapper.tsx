"use client";
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occured",
}: {
    message?: string;
}) => {
    const [error, setError] = useState(false);

    if (error) throw new Error(message);
    return <button title="Simulate an error"></button>;
};
