from django.views.generic.base import TemplateView


class RootIndex(TemplateView):
    template_name = 'django_config/rootindex.html'

    def get_context_data(self, *args, **kwargs):
        context = super(RootIndex, self).get_context_data(*args, **kwargs)
        context['API_NAME'] = 'The Gang API'
        return context
