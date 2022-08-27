<script>
export default {
  props: {
    componentTag: {
      type: String,
      default: "span",
      validator(value) {
        let regex = /^(span)|(h\d)|(p)|(a)$/;
        return regex.test(value);
      },
    },
    customCursorStyling: {
      type: Object,
      default: () => {},
    },
    beginningWord: {
      type: String,
      default: "",
    },
    text: {
      type: [String, Array],
      required: true,
      validator(value) {
        if (typeof value === "string") {
          return value.length > 0;
        }
        return value.every(
          (item) => typeof item === "string" && item.length > 0
        );
      },
    },
    startDelay: {
      type: Number,
      default: 500,
      validator(value) {
        return value >= 0;
      },
    },
    betweenWordDelay: {
      type: Number,
      default: 500,
      validator(value) {
        return value >= 0;
      },
    },
    typingDelay: {
      type: Number,
      default: 300,
      validator(value) {
        return value >= 0;
      },
    },
    deletingDelay: {
      type: Number,
      default: 100,
      validator(value) {
        return value >= 0;
      },
    },
    waitBeforeDeleteDelay: {
      type: Number,
      default: 500,
      validator(value) {
        return value >= 0;
      },
    },
    startByDefault: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentText: this.beginningWord,
      offset: this.beginningWord.length,
      textFeed: [],
    };
  },
  mounted() {
    if (this.startByDefault) {
      this.begin();
    }
  },
  methods: {
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    begin() {
      if (typeof this.text === "string") {
        this.textFeed = [this.text];
      } else {
        this.textFeed = [...this.text];
      }
      this.textFeed.map((word) => this.beginningWord + word);
      this.autoType();
    },
    async autoType() {
      for (let currentWord of [...this.textFeed]) {
        await this.writeWord(currentWord);
        await this.delay(this.waitBeforeDeleteDelay);
        await this.removeWord(currentWord);
        await this.delay(this.betweenWordDelay);
        console.log(currentWord);
      }
    },
    async writeWord(currentWord) {
      for (let char of [...currentWord]) {
        this.currentText += char;
        await this.delay(this.typingDelay);
      }
    },
    async removeWord(currentWord) {
      console.log(currentWord, currentWord.length);
      for (let i = 0; i < currentWord.length; i++) {
        this.currentText = this.currentText.slice(0, -1);
        console.log(this.currentText, i);
        await this.delay(this.deletingDelay);
      }
    },
  },
};
</script>

<template>
  <component class="auto-typer-vue" :is="componentTag"
    >{{ currentText
    }}<span class="auto-typer-cursor" :style="customCursorStyling"></span>
  </component>
</template>

<style scoped>
.auto-typer-vue {
  display: flex;
  align-items: center;
  gap: 2px;
  width: fit-content;
}

.auto-typer-cursor {
  content: "";
  width: 4px;
  height: 20px;
  background: white;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}
</style>
