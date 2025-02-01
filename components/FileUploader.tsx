"use client";
import React from "react";
import { Plus } from "lucide-react";
import useFileUploader from "@/hooks/use-fileuploader";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  onImageUrlsReceived: (imageUrls: string[]) => void;
  children?: React.ReactNode;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onImageUrlsReceived,
  children,
}) => {
  const uploadApiEndpoint = "/api/upload-images" as string;
  const { getRootProps, getInputProps, uploading, uploadProgress } =
    useFileUploader({ uploadApiEndpoint, onImageUrlsReceived });

  return (
    <div className="flex items-center justify-start">
      <div>
        <div
          role="button"
          {...getRootProps()}
          className={cn(
            `w-20 h-20 cursor-pointer  rounded-[8px] bg-[#e5f6e8]`,
            uploading && "!pointer-events-none cursor-not-allowed"
          )}
        >
          <div className="relative flex flex-col items-center justify-center h-full">
            <input {...getInputProps()} />
            <Plus className="h-6 w-6 !text-primary" />

            {uploading && (
              <div
                className="absolute px-1 inset-0 bg-white/50 backdrop-blur-sm 
        flex flex-col items-center justify-center"
              >
                <Progress value={uploadProgress} className="w-full" />
                <span className="text-xs text-black">{uploadProgress}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default FileUploader;
