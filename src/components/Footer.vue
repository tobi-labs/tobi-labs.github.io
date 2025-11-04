<template>
  <footer class="bg-black py-10 md:py-[72px]">
    <div class="container">
      <div class="md:flex items-start justify-between max-md:space-y-10">
        <div class="space-y-6">
          <a href="/" class="max-w-[197px] md:max-w-[258px] w-full block">
            <img
              src="../assets/images/logo-footer.webp"
              alt="logo footer"
              class="w-full h-full object-cover"
            />
          </a>
          <div class="body-2 text-gray-200">Your AI-powered web3 assistant</div>
        </div>
        <div
          class="md:max-w-[500px] max-md:space-y-10 w-full md:flex items-start justify-between md:pl-12 max-md:pl-0 max-md:text-left"
        >
          <div class="space-y-3">
            <div class="body-2 font-medium text-gray-400">Explore</div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
            >
              <a
                href="https://docs.tobi.fun"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                What is Tobi?
              </a>
            </div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
            >
              <a
                href="https://docs.tobi.fun"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                How to Tobi?
              </a>
            </div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
            >
              <a
                href="https://docs.tobi.fun"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Why Tobi?
              </a>
            </div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
            >
              <a
                href="https://docs.tobi.fun"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                FAQs
              </a>
            </div>
          </div>
          <div class="space-y-3">
            <div class="body-2 font-medium text-gray-400">Contact Us</div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out cursor-pointer"
              @click="handlePartnerships()"
            >
              Partners & Integrations
            </div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out cursor-pointer"
              @click="handleGeneral()"
            >
              General inquiries
            </div>
            <div
              class="body-2 font-medium text-white lg:hover:text-primary duration-300 ease-in-out"
            >
              <a
                href="https://www.linkedin.com/company/tobicopilot"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Careers
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <div class="body-2 font-medium text-gray-400">Community</div>
            <div class="flex md:flex-col md:space-x-0 space-x-6 md:space-y-4">
              <div>
                <a
                  href="https://x.com/TobiCopilot"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconXFooter />
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/TobiCommunity"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconTelegramFooter />
                </a>
              </div>
              <div>
                <a
                  href="https://medium.com/TobiCopilot"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconMediumFooter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-500 mt-10 md:mt-[120px] mb-3"></div>
      <div class="md:flex items-center justify-between max-md:space-y-6">
        <div class="flex items-center space-x-6 max-md:justify-between">
          <div>
            <a
              href="/private-policy"
              class="body-2 text-gray-200 md:text-gray-400 lg:hover:text-primary duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <a
              href="/terms-of-service"
              class="body-2 text-gray-200 md:text-gray-400 lg:hover:text-primary duration-300 ease-in-out"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div class="body-2 text-gray-400">© 2024 TOBI. All rights reserved</div>
      </div>
    </div>
  </footer>
  <JamModal
    class="modal-rate md:flex-col md:flex md:items-center md:justify-center z-[100]"
    :show="isOpenPartnerships"
    @close="closeModalPartnerships"
  >
    <div v-if="isSuccess">
      <div class="xl:p-6 md:p-5 p-3.5">
        <IconSuccessV2 class="mx-auto mb-1 xl:mb-2 md:mb-1.5" />
        <p class="text-center text-gray-500">Send success</p>
      </div>
    </div>
    <div v-else class="h-full py-8 px-4 md:px-12 relative overflow-y-auto">
      <div
        class="absolute text-gray-400 lg:hover:text-primary duration-300 ease-in-out top-6 right-6 cursor-pointer"
        @click="closeModalPartnerships"
      >
        <IconCloseTobi />
      </div>
      <div class="display-3 text-white uppercase">Partners & Integrations</div>
      <div class="body-1 text-gray-200 mt-4 mb-8">
        Tell us a little more in the form below or email us at
        partners@tobilabs.io
      </div>
      <form @submit.prevent="onSubmitForm" class="grid grid-cols-2 gap-6">
        <div class="space-y-1.5 w-full col-span-full">
          <div class="body-2 text-white font-medium">Your Name *</div>
          <JamFieldSet
            v-model="form.contact.data.name"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Your Name',
              name: 'name',
              fieldName: 'name',
              label: 'Your Name',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Your Email *</div>
          <JamFieldSet
            v-model="form.contact.data.email"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'email',
              placeholder: 'Your Email',
              name: 'email',
              fieldName: 'email',
              label: 'Your Email',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Your Telegram *</div>
          <JamFieldSet
            v-model="form.contact.data.telegram"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Your Telegram',
              name: 'telegram',
              fieldName: 'telegram',
              label: 'Your Telegram',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Project Name *</div>
          <JamFieldSet
            v-model="form.contact.data.projectName"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Project Name',
              name: 'projectName',
              fieldName: 'projectName',
              label: 'Project Name',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Project a(s) *</div>
          <JamFieldSet
            v-model="form.contact.data.projectLink"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Project a',
              name: 'projectLink',
              fieldName: 'projectLink',
              label: 'Project a',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full">
          <div class="body-2 text-white font-medium">Message</div>
          <JamFieldSet
            v-model="form.contact.data.message"
            :field="{
              rules: rules,
              errors: errors,
              validate: isSubmit,
              type: 'textarea',
              placeholder: 'Message',
              name: 'message',
              fieldName: 'message',
              label: 'Message',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <button
          @click="onSubmitForm"
          class="mt-4 col-span-full btn btn-primary !font-bold md:space-x-2.5 w-full"
        >
          <span>Submit </span>
          <div class="icon-btn max-md:hidden">
            <IconArrow />
          </div>
        </button>
        <div
          v-if="isErrorSendingMessage"
          class="mb-4 col-span-full p-3 bg-red-100 border border-red-400 rounded w-full text-center"
        >
          <p class="text-red-700 body-2">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </JamModal>
  <JamModal
    class="modal-rate md:flex-col md:flex md:items-center md:justify-center z-[100]"
    :show="isOpenGeneral"
    @close="closeModalGeneral"
  >
    <div v-if="isSuccess">
      <div class="xl:p-6 md:p-5 p-3.5">
        <IconSuccessV2 class="mx-auto mb-1 xl:mb-2 md:mb-1.5" />
        <p class="text-center text-gray-500">Send success</p>
      </div>
    </div>
    <div v-else class="h-full py-8 px-4 md:px-12 relative overflow-y-auto">
      <div
        class="absolute text-gray-400 lg:hover:text-primary duration-300 ease-in-out top-6 right-6 cursor-pointer"
        @click="closeModalGeneral"
      >
        <IconCloseTobi />
      </div>
      <div class="display-3 text-white uppercase">General inquiries</div>
      <div class="body-1 text-gray-200 mt-4 mb-8">
        Tell us a little more in the form below or email us at hello@tobilabs.io
      </div>
      <form
        @submit.prevent="onSubmitFormGeneral"
        class="grid grid-cols-2 gap-6"
      >
        <div class="space-y-1.5 w-full col-span-full">
          <div class="body-2 text-white font-medium">Your Name *</div>
          <JamFieldSet
            v-model="formGeneral.contact.data.name"
            :field="{
              rules: rulesGeneral,
              errors: errorsGeneral,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Your Name',
              name: 'name',
              fieldName: 'name',
              label: 'Your Name',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Your Email *</div>
          <JamFieldSet
            v-model="formGeneral.contact.data.email"
            :field="{
              rules: rulesGeneral,
              errors: errorsGeneral,
              validate: isSubmit,
              type: 'email',
              placeholder: 'Your Email',
              name: 'email',
              fieldName: 'email',
              label: 'Your Email',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full md:col-span-1">
          <div class="body-2 text-white font-medium">Your Telegram or X *</div>
          <JamFieldSet
            v-model="formGeneral.contact.data.telegram"
            :field="{
              rules: rulesGeneral,
              errors: errorsGeneral,
              validate: isSubmit,
              type: 'text',
              placeholder: 'Your Telegram or X',
              name: 'telegram',
              fieldName: 'telegram',
              label: 'Your Telegram',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <div class="space-y-1.5 w-full col-span-full">
          <div class="body-2 text-white font-medium">Message</div>
          <JamFieldSet
            v-model="formGeneral.contact.data.message"
            :field="{
              rules: rulesGeneral,
              errors: errorsGeneral,
              validate: isSubmit,
              type: 'textarea',
              placeholder: 'Message',
              name: 'message',
              fieldName: 'message',
              label: 'Message',
            }"
            :isSubmit="isSubmit"
            @setIsSubmit="setIsSubmit"
          />
        </div>
        <button
          @click="onSubmitFormGeneral"
          class="mt-4 col-span-full btn btn-primary !font-bold md:space-x-2.5 w-full"
        >
          <span>Submit </span>
          <div class="icon-btn max-md:hidden">
            <IconArrow />
          </div>
        </button>
        <div
          v-if="isErrorSendingMessage"
          class="mb-4 col-span-full p-3 bg-red-100 border border-red-400 rounded w-full text-center"
        >
          <p class="text-red-700 body-2">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </JamModal>
</template>

<script>
import IconXFooter from "@/components/icon/XFooter.vue";
import IconTelegramFooter from "@/components/icon/TelegramFooter.vue";
import IconMediumFooter from "@/components/icon/MediumFooter.vue";
import JamFieldSet from "@/components/jam/FieldSet.vue";
import JamModal from "@/components/jam/Modal.vue";
import IconCloseTobi from "@/components/icon/CloseTobi.vue";
import IconArrow from "@/components/icon/IconArrow.vue";
import IconSuccessV2 from "@/components/icon/SuccessV2.vue";
import { validateForm } from "@/lib/validator";

const emptyForm = {
  name: null,
  email: null,
  telegram: null,
  projectName: null,
  projectLink: null,
  message: null,
};
const emptyFormGeneral = {
  name: null,
  email: null,
  telegram: null,
  message: null,
};
export default {
  components: {
    IconXFooter,
    IconTelegramFooter,
    IconMediumFooter,
    JamFieldSet,
    JamModal,
    IconCloseTobi,
    IconArrow,
    IconSuccessV2,
  },
  data() {
    return {
      isSubmit: false,
      isSuccess: false,
      isOpenPartnerships: false,
      isOpenGeneral: false,
      isErrorSendingMessage: false,
      errorMessage: "",
      rules: {
        name: "required",
        email: "required|email",
        telegram: "required",
        projectName: "required",
        projectLink: "required",
        message: "",
      },
      rulesGeneral: {
        name: "required",
        email: "required|email",
        telegram: "required",
        message: "",
      },
      form: {
        contact: {
          data: {
            ...emptyForm,
          },
          type: "CONTACT_FORM",
        },
      },
      formGeneral: {
        contact: {
          data: {
            ...emptyFormGeneral,
          },
          type: "CONTACT_FORM",
        },
      },
      errors: {},
      errorsGeneral: {},
    };
  },
  created() {
    this.isYear = new Date().getFullYear();
  },
  methods: {
    handlePartnerships() {
      this.isOpenPartnerships = true;
      document.body.style.overflow = "hidden";
    },
    handleGeneral() {
      this.isOpenGeneral = true;
      document.body.style.overflow = "hidden";
    },
    async onSubmitForm(event) {
      event.preventDefault();
      this.errors = validateForm(this.form.contact.data, this.rules);

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      // Note: Backend integration removed for simplified GitHub Pages deployment
      // Form submission will show success message but data is not sent anywhere
      this.isSuccess = true;
      this.form.contact.data = {
        ...emptyForm,
      };
      this.isSubmit = true;
      document.body.style.overflow = "hidden";
    },
    async onSubmitFormGeneral(event) {
      event.preventDefault();
      this.errorsGeneral = validateForm(
        this.formGeneral.contact.data,
        this.rulesGeneral
      );

      if (Object.keys(this.errorsGeneral).length > 0) {
        return;
      }

      // Note: Backend integration removed for simplified GitHub Pages deployment
      // Form submission will show success message but data is not sent anywhere
      this.isSuccess = true;
      this.formGeneral.contact.data = {
        ...emptyFormGeneral,
      };
      this.isSubmit = true;
      document.body.style.overflow = "hidden";
    },
    closeModalPartnerships() {
      this.isOpenPartnerships = false;
      this.isSuccess = false;
      this.isErrorSendingMessage = false;
      this.errorMessage = "";
      document.body.style.overflow = "";
    },
    closeModalGeneral() {
      this.isOpenGeneral = false;
      this.isSuccess = false;
      this.isErrorSendingMessage = false;
      this.errorMessage = "";
      document.body.style.overflow = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-linear {
  background: linear-gradient(
    272.66deg,
    #007553 1.4%,
    #028962 52.78%,
    #32ae8a 92.98%
  );
}
</style>
