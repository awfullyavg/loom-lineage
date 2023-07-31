"""empty message

Revision ID: 15d452f6395c
Revises: d9da1d3e415c
Create Date: 2023-07-31 13:28:33.900648

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15d452f6395c'
down_revision = 'd9da1d3e415c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('families', schema=None) as batch_op:
        batch_op.drop_column('sibling')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('families', schema=None) as batch_op:
        batch_op.add_column(sa.Column('sibling', sa.VARCHAR(), nullable=True))

    # ### end Alembic commands ###