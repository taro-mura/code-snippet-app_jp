// スニペットデータを格納する配列 - demo版用サンプルデータ
let snippets = [
    {
        id: 1734177600000,
        title: "React useState フック",
        code: "const [count, setCount] = useState(0);\n\nfunction Counter() {\n  return (\n    <div>\n      <p>カウント: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        増加\n      </button>\n    </div>\n  );\n}",
        language: "jsx",
        description: "Reactの基本的な状態管理フック\nカウンターの実装例",
        tags: ["react", "hooks", "javascript", "jsx"],
        createdAt: "2024-12-14T12:00:00.000Z"
    },
    {
        id: 1734177700000,
        title: "Python リスト内包表記",
        code: "# 偶数のみを抽出\neven_numbers = [x for x in range(10) if x % 2 == 0]\nprint(even_numbers)  # [0, 2, 4, 6, 8]\n\n# 文字列の大文字変換\nwords = ['hello', 'world', 'python']\nupper_words = [word.upper() for word in words]\nprint(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']",
        language: "python",
        description: "Pythonの効率的なリスト処理\n条件付きフィルタリングと変換",
        tags: ["python", "list-comprehension", "filter"],
        createdAt: "2024-12-14T12:05:00.000Z"
    },
    {
        id: 1734177800000,
        title: "CSS Flexbox センタリング",
        code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.centered-item {\n  background: #007aff;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n}",
        language: "css",
        description: "要素を画面中央に配置\nFlexboxの基本的な使い方",
        tags: ["css", "flexbox", "centering", "layout"],
        createdAt: "2024-12-14T12:10:00.000Z"
    },
    {
        id: 1734177900000,
        title: "JavaScript 配列の便利メソッド",
        code: "const numbers = [1, 2, 3, 4, 5];\n\n// フィルター\nconst evenNumbers = numbers.filter(n => n % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]\n\n// マップ\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\n// リデュース\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log(sum); // 15",
        language: "javascript",
        description: "配列操作の基本パターン\nfilter, map, reduceの使い方",
        tags: ["javascript", "array", "functional-programming"],
        createdAt: "2024-12-14T12:15:00.000Z"
    },
    {
        id: 1734178000000,
        title: "HTML セマンティック構造",
        code: "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>ページタイトル</title>\n</head>\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href=\"#home\">ホーム</a></li>\n        <li><a href=\"#about\">について</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <section>\n      <h1>メインコンテンツ</h1>\n      <article>\n        <h2>記事タイトル</h2>\n        <p>記事の内容...</p>\n      </article>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 サイト名</p>\n  </footer>\n</body>\n</html>",
        language: "html",
        description: "SEOに配慮したHTML構造\nセマンティックタグの適切な使用",
        tags: ["html", "semantic", "seo", "structure"],
        createdAt: "2024-12-14T12:20:00.000Z"
    },
    {
        id: 1734178100000,
        title: "Vue.js コンポーネント基本",
        code: "<template>\n  <div class=\"todo-item\">\n    <input \n      type=\"checkbox\" \n      v-model=\"completed\"\n      @change=\"updateStatus\"\n    >\n    <span :class=\"{ completed: completed }\">\n      {{ title }}\n    </span>\n    <button @click=\"deleteItem\">削除</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: ['title', 'completed'],\n  methods: {\n    updateStatus() {\n      this.$emit('update', this.completed);\n    },\n    deleteItem() {\n      this.$emit('delete');\n    }\n  }\n}\n</script>",
        language: "vue",
        description: "Todo項目コンポーネント\npropsとemitの基本的な使い方",
        tags: ["vue", "component", "props", "emit"],
        createdAt: "2024-12-14T12:25:00.000Z"
    },
    {
        id: 1734178200000,
        title: "SQL データ抽出クエリ",
        code: "-- ユーザーと注文の結合\nSELECT \n  u.name,\n  u.email,\n  COUNT(o.id) as order_count,\n  SUM(o.total_amount) as total_spent\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= '2024-01-01'\nGROUP BY u.id, u.name, u.email\nHAVING COUNT(o.id) > 0\nORDER BY total_spent DESC\nLIMIT 10;",
        language: "sql",
        description: "ユーザーの購入実績を集計\nJOIN、GROUP BY、HAVINGの組み合わせ",
        tags: ["sql", "join", "aggregation", "group-by"],
        createdAt: "2024-12-14T12:30:00.000Z"
    },
    {
        id: 1734178300000,
        title: "TypeScript インターフェース",
        code: "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age?: number; // オプショナル\n  roles: Role[];\n}\n\ninterface Role {\n  id: number;\n  name: string;\n  permissions: Permission[];\n}\n\ntype Permission = 'read' | 'write' | 'delete';\n\n// 使用例\nconst user: User = {\n  id: 1,\n  name: '太郎',\n  email: 'taro@example.com',\n  roles: [\n    {\n      id: 1,\n      name: 'admin',\n      permissions: ['read', 'write', 'delete']\n    }\n  ]\n};",
        language: "typescript",
        description: "型安全なデータ構造の定義\nインターフェースとユニオン型の活用",
        tags: ["typescript", "interface", "type-safety", "types"],
        createdAt: "2024-12-14T12:35:00.000Z"
    },
    {
        id: 1734178400000,
        title: "Bash スクリプト自動化",
        code: "#!/bin/bash\n\n# プロジェクトのビルドとデプロイを自動化\nset -e  # エラー時に停止\n\necho \"🏗️  ビルド開始...\"\nnpm run build\n\necho \"🧪 テスト実行...\"\nnpm test\n\necho \"📦 アーカイブ作成...\"\ntar -czf dist-$(date +%Y%m%d-%H%M%S).tar.gz dist/\n\necho \"🚀 デプロイ実行...\"\nrsync -avz dist/ user@server:/var/www/\n\necho \"✅ デプロイ完了！\"\n\n# ログファイルに記録\necho \"$(date): デプロイ成功\" >> deploy.log",
        language: "bash",
        description: "自動ビルド＆デプロイスクリプト\nエラーハンドリングとログ出力",
        tags: ["bash", "automation", "deployment", "script"],
        createdAt: "2024-12-14T12:40:00.000Z"
    },
    {
        id: 1734178500000,
        title: "JSON API レスポンス構造",
        code: "{\n  \"status\": \"success\",\n  \"data\": {\n    \"user\": {\n      \"id\": 123,\n      \"name\": \"田中太郎\",\n      \"email\": \"tanaka@example.com\",\n      \"profile\": {\n        \"avatar\": \"https://example.com/avatar/123.jpg\",\n        \"bio\": \"フロントエンド開発者\"\n      }\n    },\n    \"posts\": [\n      {\n        \"id\": 456,\n        \"title\": \"React Hooksについて\",\n        \"created_at\": \"2024-12-14T12:00:00Z\",\n        \"tags\": [\"react\", \"javascript\"]\n      }\n    ]\n  },\n  \"meta\": {\n    \"total_posts\": 15,\n    \"page\": 1,\n    \"per_page\": 10\n  }\n}",
        language: "json",
        description: "REST APIの標準的なレスポンス形式\nデータ、メタ情報、ステータスの構造化",
        tags: ["json", "api", "rest", "response"],
        createdAt: "2024-12-14T12:45:00.000Z"
    }
];

// DOM要素の取得
const form = document.getElementById('snippet-form');
const snippetsContainer = document.getElementById('snippets-container');
const tagFiltersContainer = document.getElementById('tag-filters');
const searchInput = document.getElementById('search-input');

// 現在のフィルターと検索
let currentFilter = 'all';
let currentSearch = '';
let selectedTags = [];
let filterMode = 'and'; // 'and' or 'or'
let tagOrder = [
    // 言語タグを優先表示
    'jsx', 'python', 'css', 'javascript', 'html', 'vue', 'sql', 'typescript', 'bash', 'json',
    // 機能タグ
    'react', 'hooks', 'list-comprehension', 'filter', 'flexbox', 'centering', 'layout',
    'array', 'functional-programming', 'semantic', 'seo', 'structure', 'component',
    'props', 'emit', 'join', 'aggregation', 'group-by', 'interface', 'type-safety',
    'types', 'automation', 'deployment', 'script', 'api', 'rest', 'response'
]; // タグの表示順序（demo版用初期順序）

// プログラミング言語のリスト（言語タグ判定用）
const PROGRAMMING_LANGUAGES = [
    'javascript', 'python', 'html', 'css', 'typescript', 'jsx', 'vue', 
    'php', 'sql', 'bash', 'json', 'yaml', 'markdown', 'plaintext'
];

// ページ読み込み時の初期化（demo版）
document.addEventListener('DOMContentLoaded', function() {
    // demo版では固定のサンプルデータを使用
    // loadSnippets(); // 無効化
    // loadTagOrder(); // 無効化
    renderSnippets();
    updateTagFilters();
    updateDataInfo();
    // initializeDropZone(); // demo版では無効化
    initializeEditModal();
    initializeSortableTags();
    initializeKeyboardShortcuts();
});

// フォーム送信時の処理（demo版では無効化）
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showMessage('demo版では新しいスニペットの追加はできません', 'info');
    });
}

// タブ切り替え機能
function switchTab(tabName) {
    // タブボタンの状態を更新
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    // タブコンテンツの表示を更新
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // 一覧タブに切り替わった時は表示を更新
    if (tabName === 'list') {
        renderSnippets();
        updateTagFilters();
    }
}

// スニペットを追加する関数
function addSnippet() {
    const title = document.getElementById('title').value.trim();
    const code = document.getElementById('code').value.trim();
    const language = document.getElementById('language').value;
    const description = document.getElementById('description').value.trim();
    const tagsInput = document.getElementById('tags').value.trim();
    
    if (!title || !code) {
        alert('タイトルとコードは必須です！');
        return;
    }
    
    // タグをパース（カンマ区切り）
    const tags = tagsInput 
        ? tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag)
        : [];
    
    // 選択した言語をタグに自動追加（重複チェック）
    if (language && !tags.includes(language.toLowerCase())) {
        tags.push(language.toLowerCase());
    }
    
    // 新しいスニペットオブジェクト
    const snippet = {
        id: Date.now(), // 簡単なID生成
        title,
        code,
        language,
        description,
        tags,
        createdAt: new Date().toISOString()
    };
    
    // demo版では保存しない
    showMessage('demo版ではデータの保存はできません', 'info');
}

// スニペット一覧を表示する関数
function renderSnippets() {
    // 検索とフィルターを適用
    let filteredSnippets = snippets;
    
    // タグフィルター
    if (selectedTags.length > 0) {
        filteredSnippets = filteredSnippets.filter(snippet => {
            if (filterMode === 'and') {
                // AND検索: 選択したタグをすべて含む
                return selectedTags.every(tag => snippet.tags.includes(tag));
            } else {
                // OR検索: 選択したタグのいずれかを含む
                return selectedTags.some(tag => snippet.tags.includes(tag));
            }
        });
    } else if (currentFilter !== 'all') {
        // 旧来の単一タグフィルター（互換性のため）
        filteredSnippets = filteredSnippets.filter(snippet => 
            snippet.tags.includes(currentFilter)
        );
    }
    
    // 検索フィルター
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredSnippets = filteredSnippets.filter(snippet =>
            snippet.title.toLowerCase().includes(searchLower) ||
            snippet.code.toLowerCase().includes(searchLower) ||
            snippet.description.toLowerCase().includes(searchLower) ||
            snippet.tags.some(tag => tag.includes(searchLower))
        );
    }
    
    // 件数を更新
    document.getElementById('filtered-count').textContent = `${filteredSnippets.length}件`;
    
    if (filteredSnippets.length === 0) {
        const hasFilters = selectedTags.length > 0 || currentFilter !== 'all' || currentSearch;
        snippetsContainer.innerHTML = `
            <div class="empty-state">
                <p>📝 ${hasFilters ? '条件に一致するスニペットがありません' : 'まだスニペットがありません'}</p>
                <p>${hasFilters ? '検索条件やフィルターを変更してみてください' : '「一覧・検索」タブから最初のスニペットを追加してみましょう！'}</p>
            </div>
        `;
        return;
    }
    
    snippetsContainer.innerHTML = filteredSnippets.map(snippet => {
        // シンタックスハイライトを適用したコードを生成
        const highlightedCode = highlightCode(snippet.code, snippet.language || 'plaintext');
        
        return `
            <div class="snippet-card" data-id="${snippet.id}">
                <div class="snippet-header">
                    <div class="snippet-title">${escapeHtml(snippet.title)}</div>
                    ${snippet.description ? `<div class="snippet-description">${escapeHtml(snippet.description)}</div>` : ''}
                </div>
                <div class="snippet-code">
                    ${snippet.language ? `<div class="snippet-language">${escapeHtml(snippet.language)}</div>` : ''}
                    <div class="code-content">${highlightedCode}</div>
                    <div class="copy-icon" onclick="copyToClipboard('${snippet.id}')" title="クリックでコピー">
                        Copy
                    </div>
                </div>
                <div class="snippet-footer">
                    <div class="snippet-tags">
                        ${snippet.tags.map(tag => {
                            const isLanguageTag = PROGRAMMING_LANGUAGES.includes(tag.toLowerCase());
                            const tagClass = isLanguageTag ? 'snippet-tag language-tag' : 'snippet-tag';
                            return `<span class="${tagClass}" onclick="toggleTagFilter('${tag}')">${escapeHtml(tag)}</span>`;
                        }).join('')}
                    </div>
                    <div class="snippet-actions">
                        <button class="edit-btn" onclick="openEditModal('${snippet.id}')">
                            ✏️ 編集
                        </button>
                        <button class="delete-btn" onclick="deleteSnippet('${snippet.id}')">
                            🗑️ 削除
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// タグフィルターを更新する関数
function updateTagFilters() {
    // 全てのタグを取得
    const allTags = [...new Set(snippets.flatMap(snippet => snippet.tags))];
    
    // タグを言語タグと通常タグに分類
    const languageTags = allTags.filter(tag => PROGRAMMING_LANGUAGES.includes(tag.toLowerCase()));
    const regularTags = allTags.filter(tag => !PROGRAMMING_LANGUAGES.includes(tag.toLowerCase()));
    
    // タグ順序を適用（新しいタグは末尾に追加）
    const orderedTags = [];
    
    // 保存済みの順序で追加（言語タグ、通常タグの順序を維持）
    for (const tag of tagOrder) {
        if (allTags.includes(tag)) {
            orderedTags.push(tag);
        }
    }
    
    // 新しい言語タグを優先的に追加（保存済み順序にないもの）
    for (const tag of languageTags) {
        if (!orderedTags.includes(tag)) {
            orderedTags.push(tag);
        }
    }
    
    // 新しい通常タグを末尾に追加
    for (const tag of regularTags) {
        if (!orderedTags.includes(tag)) {
            orderedTags.push(tag);
        }
    }
    
    // 現在のフィルター状態で絞り込まれたスニペットを取得
    let baseFilteredSnippets = getFilteredSnippetsBase();
    
    // フィルターボタンを生成
    const allCount = snippets.length;
    const currentCount = baseFilteredSnippets.length;
    
    const filterButtons = [
        `<button class="tag-filter ${selectedTags.length === 0 && currentFilter === 'all' ? 'active' : ''}" onclick="clearAllFilters()">全て (${allCount})</button>`
    ];
    
    // タグボタンを生成（0件のタグは非表示）
    orderedTags.forEach(tag => {
        const isSelected = selectedTags.includes(tag);
        const isLanguageTag = PROGRAMMING_LANGUAGES.includes(tag.toLowerCase());
        let count;
        
        if (isSelected) {
            // 選択中のタグ: そのタグが含まれるスニペットの件数
            count = getCountForSingleTag(tag);
        } else {
            // 未選択のタグ: このタグを追加した場合の件数
            const tempSelectedTags = [...selectedTags, tag];
            count = getCountForTags(tempSelectedTags);
        }
        
        // 件数が0の場合はボタンを表示しない
        if (count > 0) {
            const languageClass = isLanguageTag ? ' language-tag' : '';
            const selectedClass = isSelected ? 'selected' : '';
            const tagClass = `tag-filter${languageClass} ${selectedClass}`.trim();
            
            filterButtons.push(
                `<button class="${tagClass}" data-tag="${escapeHtml(tag)}" onclick="toggleTagFilter('${tag}')">${escapeHtml(tag)} (${count})</button>`
            );
        }
    });
    
    tagFiltersContainer.innerHTML = filterButtons.join('');
    
    // 選択中タグを表示
    updateSelectedTagsDisplay();
    
    // Sortableを再初期化
    if (window.tagSortable) {
        window.tagSortable.destroy();
    }
    initializeSortableTags();
}

// フィルターベースのスニペットを取得（検索のみ適用）
function getFilteredSnippetsBase() {
    let filteredSnippets = snippets;
    
    // 検索フィルターのみ適用
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredSnippets = filteredSnippets.filter(snippet =>
            snippet.title.toLowerCase().includes(searchLower) ||
            snippet.code.toLowerCase().includes(searchLower) ||
            snippet.description.toLowerCase().includes(searchLower) ||
            snippet.tags.some(tag => tag.includes(searchLower))
        );
    }
    
    return filteredSnippets;
}

// 指定したタグ組み合わせにマッチする件数を取得
function getCountForTags(tags) {
    if (tags.length === 0) {
        return getFilteredSnippetsBase().length;
    }
    
    const baseSnippets = getFilteredSnippetsBase();
    
    return baseSnippets.filter(snippet => {
        if (filterMode === 'and') {
            // AND検索: すべてのタグを含む
            return tags.every(tag => snippet.tags.includes(tag));
        } else {
            // OR検索: いずれかのタグを含む
            return tags.some(tag => snippet.tags.includes(tag));
        }
    }).length;
}

// 単一タグが含まれるスニペットの件数を取得
function getCountForSingleTag(tag) {
    const baseSnippets = getFilteredSnippetsBase();
    return baseSnippets.filter(snippet => snippet.tags.includes(tag)).length;
}

// 選択中タグの表示を更新
function updateSelectedTagsDisplay() {
    const selectedTagsContainer = document.getElementById('selected-tags');
    
    if (selectedTags.length === 0) {
        selectedTagsContainer.style.display = 'none';
        return;
    }
    
    selectedTagsContainer.style.display = 'block';
    const tagsHtml = selectedTags.map(tag => 
        `<span class="selected-tag">${escapeHtml(tag)}</span>`
    ).join('');
    
    selectedTagsContainer.innerHTML = `
        <span class="selected-label">選択中 (${filterMode.toUpperCase()}):</span>
        ${tagsHtml}
    `;
}

// タグフィルターをトグル
function toggleTagFilter(tag) {
    const index = selectedTags.indexOf(tag);
    
    if (index === -1) {
        // タグを追加
        selectedTags.push(tag);
    } else {
        // タグを削除
        selectedTags.splice(index, 1);
    }
    
    // 旧来のフィルターをリセット
    currentFilter = 'all';
    
    renderSnippets();
    updateTagFilters();
    
    // 一覧タブに自動切り替え
    switchTab('list');
}

// フィルターモードを切り替え
function toggleFilterMode() {
    filterMode = filterMode === 'and' ? 'or' : 'and';
    
    const btn = document.getElementById('filter-mode-btn');
    btn.className = `filter-mode-btn ${filterMode}-mode`;
    
    if (filterMode === 'and') {
        btn.textContent = '🔗 AND検索（絞り込み）';
    } else {
        btn.textContent = '🌐 OR検索（いずれか）';
    }
    
    renderSnippets();
    updateTagFilters(); // 件数を更新
    updateSelectedTagsDisplay();
}

// 全フィルターをクリア
function clearAllFilters() {
    selectedTags = [];
    currentFilter = 'all';
    renderSnippets();
    updateTagFilters();
}

// 旧来の関数（互換性のため保持）
function filterByTag(tag) {
    if (tag === 'all') {
        clearAllFilters();
    } else {
        toggleTagFilter(tag);
    }
}

// 検索機能
function searchSnippets() {
    currentSearch = searchInput.value;
    renderSnippets();
    updateTagFilters(); // 検索後にタグ件数を更新
}

// 検索をクリア
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    renderSnippets();
    updateTagFilters(); // クリア後にタグ件数を更新
}

// クリップボードにコピーする関数
function copyToClipboard(snippetId) {
    const snippet = snippets.find(s => s.id == snippetId);
    if (!snippet) return;
    
    // クリックされた要素を取得
    const targetElement = document.querySelector(`[onclick="copyToClipboard('${snippetId}')"]`);
    
    // 新しいnavigator.clipboard APIを試行
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(snippet.code).then(() => {
            showCopySuccess(targetElement);
        }).catch(err => {
            console.warn('Clipboard API failed, trying fallback:', err);
            fallbackCopyToClipboard(snippet.code, targetElement);
        });
    } else {
        // フォールバック方法を使用
        fallbackCopyToClipboard(snippet.code, targetElement);
    }
}

// フォールバック用のコピー関数
function fallbackCopyToClipboard(text, targetElement) {
    try {
        // テキストエリアを作成
        const textArea = document.createElement('textarea');
        textArea.value = text;
        
        // 画面外に配置
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        
        document.body.appendChild(textArea);
        
        // フォーカスして選択
        textArea.focus();
        textArea.select();
        
        // コピーコマンドを実行
        const successful = document.execCommand('copy');
        
        // テキストエリアを削除
        document.body.removeChild(textArea);
        
        if (successful) {
            showCopySuccess(targetElement);
        } else {
            throw new Error('execCommand failed');
        }
    } catch (err) {
        console.error('All copy methods failed:', err);
        showCopyError();
    }
}

// コピー成功時の表示
function showCopySuccess(targetElement) {
    // アイコンの表示を一時的に変更
    const icon = targetElement;
    const originalText = icon.textContent;
    icon.textContent = 'Copied!';
    icon.classList.add('copied');
    
    setTimeout(() => {
        icon.textContent = originalText;
        icon.classList.remove('copied');
    }, 2000);
    
    showMessage('クリップボードにコピーしました！', 'success');
}

// コピー失敗時の表示
function showCopyError() {
    showMessage('自動コピーに失敗しました。手動で選択してコピーしてください。', 'error');
    
    // コードエリアをハイライト
    const snippetCard = event.target.closest('.snippet-card');
    if (snippetCard) {
        const codeElement = snippetCard.querySelector('.code-text');
        if (codeElement) {
            // テキストを選択
            if (window.getSelection) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(codeElement);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            
            // コードエリアをハイライト
            codeElement.style.backgroundColor = '#ffffcc';
            setTimeout(() => {
                codeElement.style.backgroundColor = '';
                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                }
            }, 5000);
        }
    }
}







// シンタックスハイライトを適用する関数
function highlightCode(code, language) {
    try {
        // highlight.jsが利用可能かチェック
        if (typeof hljs !== 'undefined') {
            // 言語がサポートされているかチェック
            if (language && language !== 'plaintext' && hljs.getLanguage(language)) {
                const result = hljs.highlight(code, { language: language });
                return `<pre><code class="hljs language-${language}">${result.value}</code></pre>`;
            } else {
                // 自動検出またはプレーンテキスト
                const result = hljs.highlightAuto(code);
                return `<pre><code class="hljs">${result.value}</code></pre>`;
            }
        }
    } catch (error) {
        console.warn('Syntax highlighting failed:', error);
    }
    
    // フォールバック: プレーンテキスト
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
}
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// メッセージ表示関数
function showMessage(message, type = 'info') {
    // 既存のメッセージを削除
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 新しいメッセージを作成
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#34c759' : type === 'error' ? '#ff3b30' : '#007aff'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // 3秒後に自動削除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}


// 編集モーダルを初期化
function initializeEditModal() {
    const editForm = document.getElementById('edit-form');
    if (editForm) {
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updateSnippet();
        });
    }
    
    // モーダルの背景クリックで閉じる
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeEditModal();
            }
        });
    }
}

// 編集モーダルを開く
function openEditModal(snippetId) {
    const snippet = snippets.find(s => s.id == snippetId);
    if (!snippet) return;
    
    // 現在の値をフォームにセット
    document.getElementById('edit-title').value = snippet.title;
    document.getElementById('edit-code').value = snippet.code;
    document.getElementById('edit-language').value = snippet.language || 'javascript';
    document.getElementById('edit-description').value = snippet.description || '';
    document.getElementById('edit-tags').value = snippet.tags.join(', ');
    
    // 編集中のIDを保存
    document.getElementById('edit-form').dataset.snippetId = snippetId;
    
    // モーダルを表示
    document.getElementById('edit-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // スクロールを禁止
}

// 編集モーダルを閉じる
function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // スクロールを復活
    
    // フォームをリセット
    document.getElementById('edit-form').reset();
    delete document.getElementById('edit-form').dataset.snippetId;
}

// スニペットを更新
function updateSnippet() {
    const form = document.getElementById('edit-form');
    const snippetId = form.dataset.snippetId;
    
    if (!snippetId) return;
    
    const title = document.getElementById('edit-title').value.trim();
    const code = document.getElementById('edit-code').value.trim();
    const language = document.getElementById('edit-language').value;
    const description = document.getElementById('edit-description').value.trim();
    const tagsInput = document.getElementById('edit-tags').value.trim();
    
    if (!title || !code) {
        alert('タイトルとコードは必須です！');
        return;
    }
    
    // タグをパース
    const tags = tagsInput 
        ? tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag)
        : [];
    
    // 選択した言語をタグに自動追加（重複チェック）
    if (language && !tags.includes(language.toLowerCase())) {
        tags.push(language.toLowerCase());
    }
    
    // スニペットを更新
    const snippetIndex = snippets.findIndex(s => s.id == snippetId);
    if (snippetIndex !== -1) {
        // demo版では編集できない
        closeEditModal();
        showMessage('demo版ではスニペットの編集はできません', 'info');
    }
}

// SortableJSでタグのドラッグを初期化
function initializeSortableTags() {
    const tagFiltersElement = document.getElementById('tag-filters');
    if (!tagFiltersElement || typeof Sortable === 'undefined') return;
    
    window.tagSortable = Sortable.create(tagFiltersElement, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        filter: '.tag-filter[onclick*="clearAllFilters"]', // 「全て」ボタンはドラッグ不可
        preventOnFilter: false,
        
        onStart: function(evt) {
            tagFiltersElement.classList.add('drag-over');
        },
        
        onEnd: function(evt) {
            tagFiltersElement.classList.remove('drag-over');
            
            // タグの順序を更新
            const newOrder = [];
            const tagButtons = tagFiltersElement.querySelectorAll('.tag-filter[data-tag]');
            
            tagButtons.forEach(button => {
                const tag = button.getAttribute('data-tag');
                if (tag) {
                    newOrder.push(tag);
                }
            });
            
            tagOrder = newOrder;
            saveTagOrder();
            
            showMessage('タグの順序を保存しました！', 'success');
        }
    });
}

// タグ順序を保存
function saveTagOrder() {
    localStorage.setItem('tagOrder', JSON.stringify(tagOrder));
}

// タグ順序を読み込み
function loadTagOrder() {
    const saved = localStorage.getItem('tagOrder');
    if (saved) {
        try {
            tagOrder = JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to load tag order:', e);
            tagOrder = [];
        }
    }
}

// 使い方モーダルを開く
function openHelpModal() {
    document.getElementById('help-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 使い方モーダルを閉じる
function closeHelpModal() {
    document.getElementById('help-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// キーボードショートカットを初期化
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // ESCキーでモーダルを閉じる
        if (e.key === 'Escape') {
            const helpModal = document.getElementById('help-modal');
            const editModal = document.getElementById('edit-modal');
            
            if (helpModal.style.display === 'flex') {
                closeHelpModal();
            } else if (editModal.style.display === 'flex') {
                closeEditModal();
            }
        }
        
        // モーダルが開いている時は他のショートカットを無効化
        const isModalOpen = document.getElementById('help-modal').style.display === 'flex' || 
                            document.getElementById('edit-modal').style.display === 'flex';
        if (isModalOpen) return;
        
        // Fキーで検索バーにフォーカス（一覧タブの時のみ）
        if (e.key === 'f' || e.key === 'F') {
            const currentTab = document.querySelector('.tab-content.active');
            if (currentTab && currentTab.id === 'list-tab') {
                e.preventDefault();
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        }
        
        // Ctrl+H または ?キーでヘルプを開く
        if ((e.ctrlKey && e.key === 'h') || e.key === '?') {
            e.preventDefault();
            openHelpModal();
        }
    });
    
    // モーダルの背景クリックで閉じる機能を追加
    const helpModal = document.getElementById('help-modal');
    if (helpModal) {
        helpModal.addEventListener('click', function(e) {
            if (e.target === helpModal) {
                closeHelpModal();
            }
        });
    }
}

// スニペットを削除する関数（demo版では無効化）
function deleteSnippet(id) {
    showMessage('demo版ではスニペットの削除はできません', 'info');
}

// demo版用の無効化されたデータ管理関数を追加
function exportData() {
    showMessage('demo版ではデータのエクスポートはできません', 'info');
}

function importData() {
    showMessage('demo版ではデータのインポートはできません', 'info');
}

function clearAllData() {
    showMessage('demo版ではデータの削除はできません', 'info');
}

function saveSnippets() {
    // demo版では保存しない
}

function loadSnippets() {
    // demo版では読み込まない
}

// データ情報を更新（demo版用）
function updateDataInfo() {
    const dataCount = document.getElementById('data-count');
    const lastBackup = document.getElementById('last-backup');
    
    if (dataCount) {
        dataCount.textContent = `demoデータ: ${snippets.length}件`;
    }
    
    if (lastBackup) {
        lastBackup.textContent = 'demo版: バックアップ不可';
    }
}

// ドラッグ&ドロップエリアの初期化（demo版では無効）
function initializeDropZone() {
    // demo版では無効
}

// アニメーション用CSS（動的に追加）
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);