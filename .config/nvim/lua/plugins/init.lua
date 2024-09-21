return {
  {
    "stevearc/conform.nvim",
    -- event = 'BufWritePre', -- uncomment for format on save
    opts = require "configs.conform",
  },

  -- These are some examples, uncomment them if you want to see them work!
  {
    "neovim/nvim-lspconfig",
    config = function()
      require "configs.lspconfig"
    end,
  },

  -- vimtex
  {
  "lervag/vimtex",
  lazy = false,     -- we don't want to lazy load VimTeX
  -- tag = "v2.15", -- uncomment to pin to a specific release
  init = function()
    -- VimTeX configuration goes here, e.g.
    vim.g.vimtex_view_method = "zathura"
  end
  },

  -- cheat.sh
{
  'siawkz/nvim-cheatsh',
  dependencies = {
    "nvim-telescope/telescope.nvim",
  }, lazy=false,
  opts = {
    cheatsh_url = "https://cht.sh/", -- URL of the cheat.sh instance to use, support self-hosted instances
    position = "bottom", -- position of the window can be: bottom, top, left, right
    height = 20, -- height of the cheat when position is top or bottom
    width = 100, -- width of the cheat when position is left or right
  },
},

  -- {
  -- 	"nvim-treesitter/nvim-treesitter",
  -- 	opts = {
  -- 		ensure_installed = {
  -- 			"vim", "lua", "vimdoc",
  --      "html", "css"
  -- 		},
  -- 	},
  -- },
}
