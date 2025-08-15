import click
from flask.cli import with_appcontext
from app.seed_data import seed_data


@click.command("seed-db")
@with_appcontext
def seed_db_command():
    """Seed the database with initial data"""
    try:
        seed_data()
        click.echo("Database seeded successfully!")
    except Exception as e:
        click.echo(f"Error seeding database: {e}")
        raise click.Abort()


def init_app(app):
    app.cli.add_command(seed_db_command)
