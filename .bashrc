#    _               _              
#   | |__   __ _ ___| |__  _ __ ___ 
#   | '_ \ / _` / __| '_ \| '__/ __|
#  _| |_) | (_| \__ \ | | | | | (__ 
# (_)_.__/ \__,_|___/_| |_|_|  \___|
# 

# If not running interactively, don't do anything
[[ $- != *i* ]] && return
PS1='[\u@\h \W]\$ '

# -----------------------------------------------------
# LOAD CUSTOM .bashrc_custom if exists
# -----------------------------------------------------
if [ -f ~/.bashrc_custom ] ;then
    source ~/.bashrc_custom
fi

# -----------------------------------------------------
# Fastfetch if in Hyprland
# -----------------------------------------------------
#if [[ $(tty) == *"pts"* ]]; then
    #fastfetch
#else
    #echo
    #echo "Start Hyprland with command Hyprland"
#fi

alias ml4w-hyprland='~/.config/ml4w/apps/ML4W_Hyprland_Settings-x86_64.AppImage'

# to enable starship
eval "$(starship init bash)"


# to enable protege
export JAVA_HOME=/usr
export PATH=$JAVA_HOME/bin:$PATH


# to enable haskell
[ -f "/home/urielsantiago/.ghcup/env" ] && . "/home/urielsantiago/.ghcup/env" # ghcup-env

# start up tmux by default

if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
  exec tmux
fi

# start up fish shell by default

if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
  shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
  exec fish $LOGIN_OPTION
fi

# zoxide
eval "$(zoxide init bash)"
