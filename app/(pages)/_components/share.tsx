"use client"

import { TwitterShareButton } from "next-share"
import { Twitter, Copy, CopyCheck } from "lucide-react"
import { useState } from "react";

interface ShareProps {
    url: string;
    title: string
}

interface ActionIconProps {
    title: string
    icon: React.ReactNode
    action?: Function
}

const ActionIcon = ({ icon, title, action = () => { } }: ActionIconProps) =>
    <button title={`${title}`} onClick={(e) => { action() }}>
        {icon}
    </button>


export const Share = ({ url, title }: ShareProps) => {
    const [copied, setCopied] = useState(false)
    const copyFullLink = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex items-center gap-4">
            <ActionIcon icon={copied ? <CopyCheck size={18} /> : <Copy size={18} />} action={copyFullLink} title={"Copy Link"} />
            <TwitterShareButton url={`${url}`} title={`${title}\n`}>
                <ActionIcon icon={<Twitter className="text-zinc-500 transition-colors hover:hover:text-zinc-200/80" size={18} />} title="Twitter" />
            </TwitterShareButton>
        </div>
    )
}