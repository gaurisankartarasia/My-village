
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import mdx from '@mdx-js/rollup';

import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'; 
import remarkGfm from 'remark-gfm';

export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({  
        remarkPlugins: [
          remarkFrontmatter,          
          remarkMdxFrontmatter,       
          remarkGfm                   
        ],
      }) 
    },
    
    react(),
    tailwindcss(),

    
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})