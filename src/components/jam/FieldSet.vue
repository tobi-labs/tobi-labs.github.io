<template>
  <fieldset>
    <div
      v-if="
        field.type === 'text' ||
        field.type === 'email' ||
        field.type === 'password' ||
        field.type === 'textarea' ||
        field.type === 'number' ||
        field.type === 'select_single' ||
        field.type === 'select_administrative'
      "
    >
      <div class="relative">
        <JamField
          :size="size"
          :field="field"
          :validate="validate"
          :modelValue="modelValue"
          @update:modelValue="$emit('update:modelValue', $event)"
          :showFull="showFull"
        />
        <small
          v-if="validate !== true && validate !== undefined"
          class="absolute bottom-0 xl:bottom-[-4px] text-red-500 translate-y-full description"
        >
          {{ `${capitalizedLabel} is invalid` }}
        </small>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { validateField } from "@/lib/validator";
import JamField from "@/components/jam/Field.vue";
export default {
  props: ["field", "modelValue", "isSubmit", "size", "showFull"],
  emits: ["update:modelValue", "setIsSubmit", "input"],
  components: {
    JamField,
  },
  data() {
    return {
      model: this.modelValue,
      validate: this.field.validate === false ? this.field.validate : true,
      label: this.field.label || "",
    };
  },

  computed: {
    error() {
      return this.field.fieldName
        ? this.field.errors[this.field.fieldName]
        : "";
    },
    capitalizedLabel() {
      const word = this.label;
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    lowerCaseLabel() {
      return this.label.toLowerCase();
    },
  },

  created() {
    this.checkValidate();
  },

  watch: {
    "field.validate"(newVal) {
      this.validate = newVal;
    },
    model(value) {
      if (this.isSubmit) {
        if (!this.modelValue) {
          return;
        } else {
          this.$emit("setIsSubmit", false);
          return;
        }
      } else {
        this.validate = validateField(
          this.modelValue,
          this.field.rules[this.field.fieldName]
        );

        this.$emit("input", this.modelValue);
      }
    },
    error() {
      this.checkValidate();
    },
    modelValue(value) {
      this.model = value;
    },
  },

  methods: {
    checkValidate() {
      this.validate = !this.field.errors.hasOwnProperty(this.field.fieldName);
    },
  },
};
</script>
