export interface SavedPost {
    id: string;
    content: string;
    hashtags: string[];
    hookScore: number;
    format: string;
    topic: string;
    savedAt: string;
}

const POSTS_KEY = "wc_saved_posts";

function isClient() {
    return typeof window !== "undefined";
}

export function getSavedPosts(): SavedPost[] {
    if (!isClient()) return [];
    try {
        const data = localStorage.getItem(POSTS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export function savePost(post: SavedPost): void {
    if (!isClient()) return;
    const posts = getSavedPosts();
    const existing = posts.findIndex((p) => p.id === post.id);
    if (existing >= 0) {
        posts[existing] = post;
    } else {
        posts.unshift(post);
    }
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
    if (!isClient()) return;
    const posts = getSavedPosts().filter((p) => p.id !== id);
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function getStats() {
    const posts = getSavedPosts();
    return {
        totalSaved: posts.length,
        avgHookScore:
            posts.length > 0
                ? Math.round(
                    (posts.reduce((sum, p) => sum + p.hookScore, 0) / posts.length) * 10
                ) / 10
                : 0,
    };
}
